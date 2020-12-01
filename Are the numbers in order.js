https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript

    function inAscOrder(arr) {
        let temp = [...arr]
        temp.sort((a, b) => a - b)
        return arr.every((el, i) => el === temp[i])
    }