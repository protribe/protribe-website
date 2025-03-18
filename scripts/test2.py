import requests

def get_token_live_rates(api_key, token_symbol):
    url = f"https://pro-api.coinmarketcap.com/v1/cryptocurrency/market-pairs/latest"

    params = {
        'symbol': token_symbol,  # Use token symbol, e.g., 'ETH'
        'convert': 'USD',  # Convert to USD
        'limit': 10,  # Adjust the limit as needed to get more exchange pairs
    }

    headers = {
        'X-CMC_PRO_API_KEY': api_key,
        'Accept': 'application/json',
    }

    response = requests.get(url, params=params, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        pairs = data.get('data', {}).get('market_pairs', [])

        if pairs:
            for pair in pairs:
                exchange_name = pair.get('exchange', {}).get('name', 'Unknown')
                pair_name = pair.get('symbol', 'Unknown Pair')
                price = pair.get('price', 'N/A')
                print(f"Exchange: {exchange_name}, Pair: {pair_name}, Price: ${price}")
                print("-" * 50)
        else:
            print("Market pairs data not found.")
    else:
        print(f"Error: {response.status_code}, {response.text}")

# Example usage:
api_key = '5c95a136-f928-489a-b4ba-040ee47df812'  # Replace with your actual API key
token_symbol = 'ETH'  # Replace with the token symbol you want to query, like 'BTC', 'ETH'
get_token_live_rates(api_key, token_symbol)
