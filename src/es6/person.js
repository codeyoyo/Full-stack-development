export default class person {
    constructor(name, text) {
        this.name = name;
        this.text = text;
    }

    say() {
        return `${this.name}说：“${this.text}”`;
    }
}