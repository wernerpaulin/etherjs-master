
//0x21964b0d73bac02ad59cd6046c1481dc1d64f0dab39ab982209433f2fcd0e6ea

//https://maximum-prettiest-panorama.discover.quiknode.pro/09480466c46a82132882e4f20468d360d4b3e70f/

const {ethers, providers} = require('ethers')

const node = 'https://maximum-prettiest-panorama.discover.quiknode.pro/09480466c46a82132882e4f20468d360d4b3e70f/'
const provider = new ethers.providers.JsonRpcProvider(node)

async function main() {
    const blockNumber = await provider.getBlockNumber()
    console.log(blockNumber)
    //const block = await provider.getBlock(blockNumber)  
    //console.log(block['transactions'])

    const tranInfo = await provider.getTransaction('0x21964b0d73bac02ad59cd6046c1481dc1d64f0dab39ab982209433f2fcd0e6ea')
    console.log(tranInfo)
}

main()
