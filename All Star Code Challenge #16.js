https://www.codewars.com/kata/586566b773bd9cbe2b000013/train/javascript

    function noRepeat(str) {
        let res = str.split('')
        let res2 = res.filter(el => res.indexOf(el) ===  res.lastIndexOf(el))
        res2 = res2.toString()
        return (res2.length < 2) ? res2 : res2[0]
    }