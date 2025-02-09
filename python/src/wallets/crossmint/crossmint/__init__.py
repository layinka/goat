"""CrossMint wallet implementation for GOAT SDK."""
from typing import Dict, Any

from goat_wallets.crossmint.api_client import CrossmintWalletsAPI
from goat_plugins.crossmint.faucet_plugin import faucet_plugin
from goat_plugins.crossmint.mint_plugin import mint_plugin
from goat_plugins.crossmint.wallet_plugin import wallet_plugin as wallets_plugin
from goat_wallets.crossmint import custodial_factory, smart_wallet_factory

def crossmint(api_key: str) -> Dict[str, Any]:
    """Initialize CrossMint SDK with API key.
    
    Args:
        api_key: CrossMint API key
    
    Returns:
        Dict containing CrossMint wallet and plugin factories
    """
    api_client = CrossmintWalletsAPI(api_key=api_key)

    return {
        "custodial": custodial_factory(api_client),
        "smartwallet": smart_wallet_factory(api_client),
        "faucet": faucet_plugin(api_client),
        "mint": mint_plugin(api_client),
        "wallets": wallets_plugin(api_client)
    }

__all__ = ["crossmint"]
