# Escrow Protocol

// TODO: There is a bug in BuyerConfirmDelivery where if you put in false, it still confirms the delivery
// TODO: implement seller locks NFT in escrow
// TODO: After BuyerConfrimDelivery is true, take item out of getSellOrders array
// TODO: After BuyerConfirmDelvery is false and/or EscrowRefund Item, reset values so that item is either delisted or back up for sale
// TODOL make function to allow edit of Listing Price Fee and Escrow Royalty Percentage

Note: Currently when making a sell order, seller needs to send 0.0045 ETH 

----

To use the current version:

1. Clone github repo
2. % npm install
3. update the hardhat.config.js file account key and rpc url by creating a file named ".env" and pasting
RPC_URL=
PRIVATE_KEY=
ETHERSCAN_API_KEY=
And input relevant info next to the equal signs.
4. Save everything and do %npx hardhat run scripts/deploy.js --network ropsten
5. If you want to change the network, follow the same template in hardhat.config.js and replace the "ropsten" in the terminal line above with the other network's name
6. The contract should be deployed soon, and you can interact with it here: https://contract.mph.am/ or on the ropsten etherscan 


----


This protocol is designed to facilitate the transfer of phygical goods using blockchain technology. Within our ecosystem, we have created digital copies of physical products using OpenGL, which we can encode on an Ethereum Virtual Machine (EVM)-based blockchain as a Non-Fungible Token (NFT). We consider this a "phygital" pairing, since the digital copy has utility outside of verifying the authenticity of the original purchase - namely, it can also be used in the metaverse. In order to ensure the authenticity of resales, we want to make sure that both this NFT and the physical product are moved in tandem.

![Escrow Protocol Diagram](https://uploads-ssl.webflow.com/623554827d9ec206c26f8a15/6299492527b0441981fa3bd8_PhygitalResaleProtocol2.drawio.png)

In our protocol, this starts with the negotiation between a buyer and seller as to the price of a secondary sale. Once this is agreed upon, the seller locks the digital (NFT) copy of the product in the escrow and the buyer locks the agreed upon amount of Ether (to-do: support for other ERC-20 tokens). The seller can then ship the physical product to the buyer, after which both parties will sign off on the transaction and the funds will be released from escrow.

This protocol is the baseline for a decentralized peer2peer resale market that BridXe is building. 