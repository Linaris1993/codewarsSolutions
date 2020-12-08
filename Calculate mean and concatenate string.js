https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/javascript

    function mean(lst){
        let num = [];
        let n = 0;
        let s = ''
        let sum = 0;
        for (let el of lst){
            if (isNaN(el) === true){
                s += el
            }
        }for (let el of lst){
            if (isNaN(el) === false){
                num.push(el)
                sum += +el
                n = sum / (num.length)
            }
        } return [n, s]
    }