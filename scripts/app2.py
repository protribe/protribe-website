import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Ensure required environment variables are set
required_env_vars = ["CDP_API_KEY_NAME", "CDP_API_KEY_PRIVATE_KEY"]
for env_var in required_env_vars:
    if not os.getenv(env_var):
        raise EnvironmentError(f"Missing required environment variable: {env_var}")

# Optional: Set network (defaults to base-sepolia)
os.environ.setdefault("NETWORK_ID", "base-sepolia")  # or "base-mainnet"

from cdp_langchain.agent_toolkits import CdpToolkit
from cdp_langchain.utils import CdpAgentkitWrapper

# Initialize CDP wrapper
cdp = CdpAgentkitWrapper()

# Create toolkit from wrapper
toolkit = CdpToolkit.from_cdp_agentkit_wrapper(cdp)

from langchain_google_genai import ChatGoogleGenerativeAI

# Load Google API key from .env
google_api_key = os.getenv("GOOGLE_API_KEY")
if not google_api_key:
    raise EnvironmentError("Missing required environment variable: GOOGLE_API_KEY")
os.environ["GOOGLE_API_KEY"] = google_api_key

llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-pro",
    temperature=0,
    max_tokens=None,
    timeout=None,
    max_retries=2,
)

from langgraph.prebuilt import create_react_agent

tools = toolkit.get_tools()
agent_executor = create_react_agent(llm, tools)

example_query = "what is my balance?"

events = agent_executor.stream(
    {"messages": [("user", example_query)]},
    stream_mode="values",
)
for event in events:
    event["messages"][-1].pretty_print()
