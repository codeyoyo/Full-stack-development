let style = require('sass-loader!./scss1.scss');
export default () => {
    let html = require('html-loader!./scss1.html');
    document.write(html);
}