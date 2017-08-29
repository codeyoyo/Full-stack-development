export default function(str) {
    console.log(str);
    return {
        func: () => {
            require(`./${str}/${str}.scss`);
        },
        html: require(`html-loader!./${str}/${str}.html`)
    }
}