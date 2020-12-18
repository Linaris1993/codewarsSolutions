https://www.codewars.com/kata/58846d50f54f021d90000012/train/javascript

    function rounders(value) {
        let count = 0;
        while (value > 10){
            value = Math.round(value / 10)
            count++
        }
        return (10 ** count) * value
    }