const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "a210761155f948c09f6fd52c17e75c52";
const mnemonic = "amazing onion mother episode fragile library shop guitar smart possible impulse cinnamon";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000
    },
  }
};