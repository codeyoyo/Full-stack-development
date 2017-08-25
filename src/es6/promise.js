let promise = new Promise(function(reslove, reject) {
    try {
        let box = document.createElement('div');
        document.body.appendChild(box);
        let i = 0;
        let t = setInterval(() => {
            i++;
            box.innerHTML = i;
            if (i > 99) {
                clearInterval(t);
                reslove(i); //异步执行成功
            }
        }, 500);
    } catch (e) {
        reject(e.message);
    }
});

export default () => {
    document.write('<div>异步执行开始</div>');
    promise.then((value) => {
        document.write('<div>异步执行成功</div>');
    }, (error) => {
        document.write('<div>异步执行失败</div>');
    });
}