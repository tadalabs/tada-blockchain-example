import SHA256 from 'crypto-js/sha256';

export default class TadaBlock {
    constructor(content, created, previousHash = '', index) {
        this.link = previousHash;
        this.created = created;
        this.content = content;
        this.connector = this.calculate();
        this.nonce = 0;
        this.index = index;
    }

    calculate() {
        return SHA256(this.index + this.link + this.created + JSON.stringify(this.content) + this.nonce).toString();
    }

    mine() {
        while (this.connector.substring(0, 4) !== Array(4 + 1).join('0')) {
            this.nonce++;
            this.connector = this.calculate();
        }
    }
}