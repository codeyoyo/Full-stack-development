module.exports = function(app) {
    app.get('/test', function(req, res) {
        res.writ('这是一个测试请求');
        res.end();
    });
}