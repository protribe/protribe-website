import os
from dotenv import load_dotenv
from cdp_langchain.agent_toolkits import CdpToolkit
from cdp_langchain.utils import CdpAgentkitWrapper
from langchain_openai import ChatOpenAI
from langgraph.prebuilt import create_react_agent
from langchain_google_genai import ChatGoogleGenerativeAI

load_dotenv()

# File to store wallet details
WALLET_FILE = "wallet_details.txt"
google_api_key = os.getenv("GOOGLE_API_KEY")
os.environ["GOOGLE_API_KEY"] = google_api_key

def save_wallet_details(wallet_data):
    """Save wallet details to a file."""
    with open(WALLET_FILE, "w") as file:
        file.write(wallet_data)

def load_wallet_details():
    """Load wallet details from a file."""
    if os.path.exists(WALLET_FILE):
        with open(WALLET_FILE, "r") as file:
            return file.read()
    return None

def initialize_cdp():
    """Initialize CDP wrapper with existing wallet data if available."""
    wallet_data = load_wallet_details()
    if wallet_data:
        cdp = CdpAgentkitWrapper(cdp_wallet_data=wallet_data)
    else:
        cdp = CdpAgentkitWrapper()
        save_wallet_details(cdp.export_wallet())
    return cdp

def main():
    # Initialize CDP wrapper
    cdp = initialize_cdp()

    # Create toolkit from wrapper
    toolkit = CdpToolkit.from_cdp_agentkit_wrapper(cdp)

    # Initialize LLM
    llm = ChatGoogleGenerativeAI(
        model="gemini-1.5-pro",
        temperature=0,
        max_tokens=None,
        timeout=None,
        max_retries=2,
    )

    # Get tools and create agent
    tools = toolkit.get_tools()
    agent_executor = create_react_agent(llm, tools)

    print("CDP Agent is ready. Type 'quit' to exit.")
    while True:
        user_input = input("You: ")
        if user_input.lower() == "quit":
            print("Exiting...")
            break

        # Process user input with the agent
        events = agent_executor.stream(
            {"messages": [("user", user_input)]},
            stream_mode="values"
        )

        for event in events:
            response = event["messages"][-1].content
            print(f"Agent: {response}")

if __name__ == "__main__":
    main()