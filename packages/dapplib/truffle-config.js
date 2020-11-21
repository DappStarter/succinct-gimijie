require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remain unfold hope ensure olympic sketch'; 
let testAccounts = [
"0x0596f09c6b52c125d23959d3f04c2bf81b79c16e795ef2a1f74950eae5253b39",
"0xa4ccda9abf2b97a5948a54d9dec979f76f8dbafb3cc42712799f9e434251f297",
"0x4c5518a760839fb085826318b0b62588d4fbe7c69eb79da95a8bb7dcdecef07b",
"0xfe771520a2a40922415eb51df9cbb239263d6959210dd1791afa73250b6b06c6",
"0xac80cc0c59833de8051402c32753e5b900e6fc8703e819b3b241e20b0aa0e987",
"0x8c72ffb34218afde204a6ab22c2818908fbeca33640db4ddb31abe0978400c9b",
"0x498b6c5842b5ddee7f57d98e1f614a87234a7d44364e78168cf5511258198b22",
"0x478ada7924a9eefcae231ac8af1a6ccafb7dee8a0f540a6dddb3581c8f98d3a8",
"0xc2b3c28e692f25228d0ec7e09057e6b5bcbd25424849eb1fdcb00ac42209f6c0",
"0x406507df563783d758058c2ee17cd8cd1b9078cc7c5707ccdfc454197f5ad91d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
