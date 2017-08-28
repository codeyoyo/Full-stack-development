import letTest from './es6/let.js';
import classTest from './es6/class.js';
import moduleFunc from './es6/moduleAction.js';
import promise from './es6/promise.js';
import scss1 from './view/helloWord/scss1.js';

export default {
    "let": { "func": letTest },
    "class": { "func": classTest },
    'module': { 'func': moduleFunc },
    'promise': { 'func': promise },
    "scss1": { 'func': scss1['func'], 'html': scss1['html'] }
}