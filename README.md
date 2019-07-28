# tada-blockchain-example

# setup

This will transpile the proof

```
$ git clone https://github.com/tadalabs/tada-blockchain-example
$ npm install
$ npm run build
```

# concept proof

Executing the test will result in something like below:

```
$ npm run test

TadaBlock:  TadaBlock {
  link:
   'ff196eebda2c1beea2620209118126a5325094fca0899f64fe260a50f0eda299',
  created: 1564322353127,
  content: { from: 'genesis', to: 'open-market', delta: 1000000 },
  connector:
   '000065862da7afb7b1ed49e4a91378ae65a08f00d39714deed8daf9a769cbb47',
  nonce: 178452,
  index: 1 }
TadaBlock:  TadaBlock {
  link:
   '000065862da7afb7b1ed49e4a91378ae65a08f00d39714deed8daf9a769cbb47',
  created: 1564322356076,
  content: { from: 'open-market', to: 'sam', delta: 100000 },
  connector:
   '0000c8b40ea86c67ccc57f7d1d9c5d91aa806bed445d576eeda075b888917d00',
  nonce: 1566,
  index: 2 }
TadaBlock:  TadaBlock {
  link:
   '0000c8b40ea86c67ccc57f7d1d9c5d91aa806bed445d576eeda075b888917d00',
  created: 1564322356110,
  content: { from: 'sam', to: 'bob', delta: 10001 },
  connector:
   '000089b0d21dd403081b68a26c643991f1daabfbe3bf4529b8400007acbe7229',
  nonce: 6039,
  index: 3 }
TadaBlock:  TadaBlock {
  link:
   '000089b0d21dd403081b68a26c643991f1daabfbe3bf4529b8400007acbe7229',
  created: 1564322356206,
  content: { from: 'sam', to: 'fred', delta: 10000 },
  connector:
   '000098250e9162b624b55ee58c53f969869a0a9d440dea9da4986ddd607408ee',
  nonce: 11787,
  index: 4 }
Tada outstanding:  999999000000
Tada open market balance:  900000
Tada balance for sam:  79999
Tada balance for fred:  10000
Tada balance for bob:  10001
TadaBlockchain is valid:  true

------------------------------------------------------------

TadaBlock:  TadaBlock {
  link:
   'ff196eebda2c1beea2620209118126a5325094fca0899f64fe260a50f0eda299',
  created: 1564322356389,
  content: { from: 'genesis', to: 'open-market', delta: 1000000 },
  connector:
   '00005f487405b7c1fb453adaf89063238f729c35912e4e161508e679b0907526',
  nonce: 35889,
  index: 1 }
TadaBlock:  TadaBlock {
  link:
   '00005f487405b7c1fb453adaf89063238f729c35912e4e161508e679b0907526',
  created: 1564322356996,
  content: { from: 'open-market', to: 'sam', delta: 100000 },
  connector:
   '0000fdcf5e24e540791d095c27d8ef62f39c4c476c759449455b5b3802fb9ed6',
  nonce: 123996,
  index: 2 }
TadaBlock:  TadaBlock {
  link:
   '0000fdcf5e24e540791d095c27d8ef62f39c4c476c759449455b5b3802fb9ed6',
  created: 1564322358972,
  content: { from: 'sam', to: 'bob', delta: 10001 },
  connector:
   '0000e76ca698ce8a6d01072947bf6b135a84d7e2713b9fe318f7688c61d7e646',
  nonce: 5294,
  index: 3 }
TadaBlock:  TadaBlock {
  link:
   '0000e76ca698ce8a6d01072947bf6b135a84d7e2713b9fe318f7688c61d7e646',
  created: 1564322359055,
  content: { from: 'sam', to: 'fred', delta: 10000 },
  connector:
   '0000ebd499f250d69b9950d43ce6560348853d23feec9f71ac6be54b39fdd1d5',
  nonce: 67263,
  index: 4 }
Tada outstanding:  999999000000
Tada open market balance:  899000
Tada balance for sam:  79999
Tada balance for fred:  10000
Tada balance for bob:  10001
Tada balance for hacker:  1000
TadaBlockchain is valid:  false
```