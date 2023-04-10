//https://palpable-thrilling-snow.ethereum-sepolia.discover.quiknode.pro/235e3937fee7d7518faf247782b087442350411d/
//

//ADR: 0xeB53d0e298cDA7d50c425f6B86e27577a7f3a839
//Phrase: name razor edge industry belt edit buyer tissue rigid make roof relax
//Priv key: 0x9e482883e61f5ebda4c87f2084e3b37a1812193b41fe038ff273901061391695


const {ethers, providers} = require('ethers')

const node = 'https://palpable-thrilling-snow.ethereum-sepolia.discover.quiknode.pro/235e3937fee7d7518faf247782b087442350411d/'
const provider = new ethers.providers.JsonRpcProvider(node)

async function main() {
    const wallet = ethers.Wallet.createRandom()
    console.log(wallet.address)
    console.log(wallet.mnemonic.phrase)
    console.log(wallet.privateKey)
    console.log("........................")

    //console.log(wallet._signingKey())
    //console.log(wallet._mnemonic())

}

main()
