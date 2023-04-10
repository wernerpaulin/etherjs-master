
const {ethers, providers} = require('ethers')

const node = 'https://maximum-prettiest-panorama.discover.quiknode.pro/09480466c46a82132882e4f20468d360d4b3e70f/'
const provider = new ethers.providers.JsonRpcProvider(node)

async function main() {
    const balance = await provider.getBalance('0x94469B7cA7EF769DE2d8fBAC126a6E0EaB745697')
    console.log(ethers.utils.formatEther(balance))
}

main()
