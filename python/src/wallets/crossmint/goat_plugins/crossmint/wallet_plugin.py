from goat.classes import Chain
from .base import PluginBase
from .wallet import CrossmintWalletService
from ...goat_wallets.crossmint.api_client import CrossmintWalletsAPI

class WalletPlugin(PluginBase):
    def __init__(self, client: CrossmintWalletsAPI):
        super().__init__("wallets", [CrossmintWalletService(client)])

    def supports_chain(self, chain: Chain) -> bool:
        return True
