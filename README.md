# Escrow Protocol

This protocol is designed to facilitate the transfer of phygical goods using blockchain technology. Within our ecosystem, we have created digital copies of physical products using OpenGL, which we can encode on an Ethereum Virtual Machine (EVM)-based blockchain as a Non-Fungible Token (NFT). We consider this a "phygital" pairing, since the digital copy has utility outside of verifying the authenticity of the original purchase - namely, it can also be used in the metaverse. In order to ensure the authenticity of resales, we want to make sure that both this NFT and the physical product are moved in tandem.

![Escrow Protocol Diagram](https://uploads-ssl.webflow.com/623554827d9ec206c26f8a15/6299492527b0441981fa3bd8_PhygitalResaleProtocol2.drawio.png)

In our protocol, this starts with the negotiation between a buyer and seller as to the price of a secondary sale. Once this is agreed upon, the seller locks the digital (NFT) copy of the product in the escrow and the buyer locks the agreed upon amount of Ether (to-do: support for other ERC-20 tokens). The seller can then ship the physical product to the buyer, after which both parties will sign off on the transaction and the funds will be released from escrow.

This protocol is the baseline for a decentralized peer2peer resale market that BridXe is building. 