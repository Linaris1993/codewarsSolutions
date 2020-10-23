https://www.codewars.com/kata/5641c3f809bf31f008000042/train/javascript

    function twoDecimalPlaces(number) {
        let res;
        if (number > 0) {
            res =  Math.floor(number * 100) / 100
        }  else {
            res = Math.ceil(number * 100) / 100
        }
        return res
    }