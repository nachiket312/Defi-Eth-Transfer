// https://eth-goerli.g.alchemy.com/v2/C2vdYoKXnm5jrHZOoAg7ImnQP2dYl90b

require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: '0.8.0',
  networks : {
    sepolia:{
      url : 'https://eth-sepolia.g.alchemy.com/v2/fWQeQDkG9-hCs3_zhdGuTBpSu9yEmeD3',
      accounts : ['ecc61069e2d43f07ec1fca57e7dad9f0c296ea4b24871a3f4bc5feeb005f5fe0']
  }
}

}