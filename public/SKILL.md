# MOAR Relay Management Skill

This skill allows an AI agent to manage MOAR relay instances through the MOAR administrative API.

## Description
A comprehensive skill for configuring, monitoring, and scaling MOAR Nostr relays and Blossom servers. Includes tools for policy management, traffic analysis, and instance lifecycle.

## Tools

### list_relays
Lists all active relay and blossom instances managed by the MOAR binary.

### vibe_relay
Generates and deploys a new relay configuration based on a natural language description.
**Arguments:**
- `prompt`: A description of the desired relay (e.g., "A private relay for my DMs")

### update_policy
Modifies access policies for a specific instance.
**Arguments:**
- `subdomain`: The target relay instance
- `policy_type`: read, write, or upload
- `require_auth`: boolean
- `allowed_pubkeys`: array of strings (optional)

### get_stats
Retrieves real-time metrics for CPU, RAM, and per-relay traffic.

## Usage Example
"OpenClaw, give me a new paid relay on 'vip' subdomain that costs 1000 sats to join."
> Agent uses `vibe_relay(prompt="paid relay on 'vip' subdomain, 1000 sats join fee")`
