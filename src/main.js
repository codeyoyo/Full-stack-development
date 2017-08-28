import person from './es6/person.js';
import route from './route.js'

let hash = window.location.hash;
let strHash = hash.substr(1, hash.length);
if (strHash == '') {
    let p = new person('webpack', 'hello');
    document.write(p.say());
} else {
    let routeObj = route[strHash];
    if (routeObj['func']) {
        routeObj['func']();
    }
    if (routeObj['html']) {
        document.body.innerHTML += routeObj['html'];
    }
    if (routeObj['css']) {
        console.log(routeObj['css']);
    }
}