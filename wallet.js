
const {ethers, providers} = require('ethers')

const node = 'https://maximum-prettiest-panorama.discover.quiknode.pro/09480466c46a82132882e4f20468d360d4b3e70f/'
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
