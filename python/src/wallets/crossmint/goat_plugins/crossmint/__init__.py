from ...goat_wallets.crossmint.api_client import CrossmintWalletsAPI
from .mint_plugin import MintPlugin
from .faucet_plugin import FaucetPlugin
from .wallet_plugin import WalletPlugin

def mint_plugin(client: CrossmintWalletsAPI):
    return lambda: MintPlugin(client)

def faucet_plugin(client: CrossmintWalletsAPI):
    return lambda: FaucetPlugin(client)

def wallet_plugin(client: CrossmintWalletsAPI):
    return lambda: WalletPlugin(client)

__all__ = ['mint_plugin', 'faucet_plugin', 'wallet_plugin']
