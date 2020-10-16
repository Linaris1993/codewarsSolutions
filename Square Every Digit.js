https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

    function squareDigits(num){
        let res = ''
        num = num + ''
        for (let el of num){
            el = Math.pow(el, 2)
            res += el
        }
        return +res
    }