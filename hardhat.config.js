require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  
    solidity: "0.8.20",
    networks: {
      hardhat: {
        //forking: {
        //  url: "https://warmhearted-attentive-market.base-mainnet.quiknode.pro/8995f5e05fc55c498a0f86ee1fb9a74306979a13/",
        //  enabled: true
        //},
      },
      localhost: {
        url: "http://localhost:8545",
      },
      mainnet: {
        url: "",
        accounts: [process.env.DEPLOYER],
      },
      testnet: {
        // url: "https://endpoints.omniatech.io/v1/arbitrum/sepolia/public",
        url: "https://arbitrum-sepolia.blockpi.network/v1/rpc/public",
        accounts: [process.env.DEPLOYER],
      },
    },



};
