https://www.codewars.com/kata/582c81d982a0a65424000201/train/javascript

    function arrCheck(value) {
        let count = 0;
        for (let el of value) {
            if (Array.isArray(el)){
                count++
            }
        }return count!== value.length ? false : true
    }