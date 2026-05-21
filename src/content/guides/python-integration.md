---
title: Python integration
description: Using web3.py with Kite from a Python backend.
order: 2
last_updated: 2026-05-20
---

# Python integration

`web3.py` works against any EVM-compatible RPC.

```bash
pip install web3
```

```python
from web3 import Web3

w3 = Web3(Web3.HTTPProvider("https://rpc.gokite.ai"))

assert w3.is_connected()
print("chain id:", w3.eth.chain_id)  # 2366
print("latest block:", w3.eth.block_number)

balance_wei = w3.eth.get_balance("0xc82C2ADE9BbacF01C2168756Ce66E88F69676967")
print("balance:", w3.from_wei(balance_wei, "ether"), "KITE")
```

Switch the RPC to `https://rpc-testnet.gokite.ai` for chain ID 2368.
