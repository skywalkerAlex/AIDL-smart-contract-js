const fs = require('fs')
const anchor = require("@project-serum/anchor")

const account = anchor.web3.Keypair.generate()

fs.writeFileSync('../../smart_contract/keypair.json', JSON.stringify(account))