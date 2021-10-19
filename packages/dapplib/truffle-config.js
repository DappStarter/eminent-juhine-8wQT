require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth prefer public harvest industry equal gesture'; 
let testAccounts = [
"0xfa446e480c36ee10a0dd647c2babd61f0a70e3a6391a61c1a8659e7b0ec697bd",
"0x3c82aed280e19819d16c17dfa355405047a4391ba491c181f8300d3a50a1bd33",
"0x36e6b06a9cf8fc3b1383f8c9b2b6ddb46addd2a7281b9f6e34e67ab5b9b86125",
"0x92269791f11b6bb45dae86a8cba4d9681b7fb4981e8253899aed5f9c478ba8a5",
"0x8979adf4e4ca16724c64ead7b487917f991e8471e69c4012c513998ab752393a",
"0x150492cafab497c8197520d39479cd2840bcad77b37b70f124f2120f333d3899",
"0x170c038bac3a6ae3b743540210ce790d378495abcab9c01326085992059318e9",
"0xd2db10e9a2f5e5194cea687d7bf2822aadc44c060795190e34749e546beb811c",
"0x8238ed920fd32d588ff581b9ac9cf655535ade0fa1f942196092001d98d55ddc",
"0xc2ca20b428cff330e5f01b6c6f0b7317d99b33d3b31eb845edb34e5b421ee900"
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
            version: '^0.8.0'
        }
    }
};

