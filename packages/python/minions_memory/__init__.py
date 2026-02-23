"""
Minions Memory Python SDK

Persistent cross-session memory, recalled facts, and agent knowledge base
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Memory.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
