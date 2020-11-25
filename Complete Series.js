https://www.codewars.com/kata/580a4001d6df740d61000301/train/javascript

    function completeSeries(arr) {
        let mult = [0]
        let max = Math.max(...arr)
        let res = arr.filter((el, i) => i !== arr.indexOf(el))
        if (res.length !== 0){
            return mult
        } else {
            for (let i = 1; i <= max; i++){
                mult.push(i)
            }

        } return mult
    }