import letTest from './es6/let.js';
import classTest from './es6/class.js';
import moduleFunc from './es6/moduleAction.js';
import promise from './es6/promise.js';

import sassRoute from './sass/sass-route.js';
const scss1 = sassRoute('scss1');
const extend = sassRoute('extend');
const mixin = sassRoute('mixin');
const ifObj = sassRoute('if');
const forObj = sassRoute('for');
const funcObj = sassRoute('function');

export default {
    "let": { "func": letTest },
    "class": { "func": classTest },
    'module': { 'func': moduleFunc },
    'promise': { 'func': promise },
    "scss1": { 'func': scss1['func'], 'html': scss1['html'] },
    "extend": { 'func': extend['func'], 'html': extend['html'] },
    "mixin": { 'func': mixin['func'], 'html': mixin['html'] },
    "if": { 'func': ifObj['func'], 'html': ifObj['html'] },
    "for": { 'func': forObj['func'], 'html': forObj['html'] },
    "function": { 'func': funcObj['func'], 'html': funcObj['html'] },
}