import TadaBlockchain from './lib/TadaBlockchain';
import TadaBlock from "./lib/TadaBlock";

const goodChain = new TadaBlockchain();

goodChain.add({
    from: 'genesis',
    to: 'open-market',
    delta: 1000000
});

goodChain.add({
    from: 'open-market',
    to: 'sam',
    delta: 100000
});

goodChain.add({
    from: 'sam',
    to: 'bob',
    delta: 10001
});

goodChain.add({
    from: 'sam',
    to: 'fred',
    delta: 10000
});

console.log('Tada outstanding: ', goodChain.getBalance('genesis'));
console.log('Tada open market balance: ', goodChain.getBalance('open-market'));
console.log('Tada balance for sam: ', goodChain.getBalance('sam'));
console.log('Tada balance for fred: ', goodChain.getBalance('fred'));
console.log('Tada balance for bob: ', goodChain.getBalance('bob'));
console.log('TadaBlockchain is valid: ', goodChain.isValid());

console.log("\n" + '-'.repeat(60) + "\n");

const badChain = new TadaBlockchain();

badChain.add({
    from: 'genesis',
    to: 'open-market',
    delta: 1000000
});

badChain.add({
    from: 'open-market',
    to: 'sam',
    delta: 100000
});

badChain.add({
    from: 'sam',
    to: 'bob',
    delta: 10001
});

badChain.add({
    from: 'sam',
    to: 'fred',
    delta: 10000
});

badChain.chain.push(new TadaBlock({
    from: 'open-market',
    to: 'hacker',
    delta: 1000
}, new Date().getTime(), 'hacked hash', 400));

console.log('Tada outstanding: ', badChain.getBalance('genesis'));
console.log('Tada open market balance: ', badChain.getBalance('open-market'));
console.log('Tada balance for sam: ', badChain.getBalance('sam'));
console.log('Tada balance for fred: ', badChain.getBalance('fred'));
console.log('Tada balance for bob: ', goodChain.getBalance('bob'));
console.log('Tada balance for hacker: ', badChain.getBalance('hacker'));
console.log('TadaBlockchain is valid: ', badChain.isValid());