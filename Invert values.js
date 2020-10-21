https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

    function invert(array) {
        let res = [];
        for (let el of array){
            el = el * -1
            res.push(el)
        }
        return res
    }