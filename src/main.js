import person from './es6/person.js';
import route from './route.js'

let hash = window.location.hash;
let strHash = hash.substr(1, hash.length);
if (strHash == '') {
    let p = new person('webpack', 'hello');
    document.write(p.say());
} else {
    route[strHash]['func']();
}