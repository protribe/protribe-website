from cdp import *

# Paste in your API key name and private key generated from https://portal.cdp.coinbase.com/access/api below:
api_key_name = "organizations/12730e27-51e7-45bc-95dc-d6347ba7eb29/apiKeys/1dfd2c5e-d40c-43d1-b516-9ef1d10e6c25";

api_key_private_key = "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIDPTTw22LHab1/cIRsiuIkDNCNpdoi89oAlAOf/IAsvRoAoGCCqGSM49\nAwEHoUQDQgAEN6KwnfovFu80E3B4DMEehRbFsXetNpGkf/7aavpbPS1y2lJiWTdw\n6dtsZIqR4UNzS8E1Nhp1B0gR/RnqMdcCJw==\n-----END EC PRIVATE KEY-----\n";

Cdp.configure(api_key_name, api_key_private_key)

# Create your first wallet.
wallet = Wallet.create()

# Fund your wallet with a faucet.
faucet_tx = wallet.faucet()