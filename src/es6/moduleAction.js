import { counter, inCounter } from './module.js';

export default () => {
    let html = `<div>${counter}</div>`;
    document.write(html);
    inCounter();
    html = `<div>${counter}</div>`;
    document.write(html);
}