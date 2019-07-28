import TadaBlock from './TadaBlock';

export default class TadaBlockchain {
    constructor() {
        this.chain = [this.genesis()];
    }

    genesis() {
        return new TadaBlock(
            {
                description: 'initial transaction',
                delta: 1000000000000,
                from: null,
                to: 'genesis'
            },
            new Date('2019-07-28').getTime(),
            '0'
        )
    }

    add(content) {
        const block = new TadaBlock(content,
            new Date().getTime(),
            this.chain[this.chain.length - 1].connector, this.chain.length);
        block.mine();
        this.chain.push(block);
        console.log('TadaBlock: ', block);
    }

    getBalance(address) {
        let balance = 0;
        if (address) {
            for (const block of this.chain) {
                if (block.content.from === address)
                    balance -= block.content.delta;
                if (block.content.to === address)
                    balance += block.content.delta;
            }
        }
        return balance;
    }

    isValid() {
        for (let i = 1; i < this.chain.length; i++) {
            if (this.chain[i].link && this.chain[i-1].connector &&
                this.chain[i].link !== this.chain[i - 1].connector) {
                return false;
            }
        }
        if (this.chain[0].connector !== this.genesis().connector) return false;
        return true;
    }
}