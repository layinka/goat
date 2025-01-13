from dataclasses import dataclass
from goat.classes.plugin_base import PluginBase
from .service import BirdeyeService


@dataclass
class BirdeyePluginOptions:
    api_key: str


class BirdeyePlugin(PluginBase):
    def __init__(self, options: BirdeyePluginOptions):
        super().__init__("birdeye", [BirdeyeService(options.api_key)])

    def supports_chain(self, chain) -> bool:
        return True


def birdeye(options: BirdeyePluginOptions) -> BirdeyePlugin:
    return BirdeyePlugin(options)
