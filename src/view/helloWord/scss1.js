export default {
    func: () => {
        require('./scss1.scss');
    },
    html: require('html-loader!./scss1.html')
}