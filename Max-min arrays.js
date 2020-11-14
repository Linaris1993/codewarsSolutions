https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript

    function solve(arr){
        let res = [];
        let i = 0;
        do {
            let max = Math.max(...arr)
            let min = Math.min(...arr)
            let indMax = arr.indexOf(max);
            let indMin = arr.indexOf(min)
            arr = arr.filter((el, i) => i !== indMin && i !== indMax)
            res.push(max, min)
            i++
        }
        while (arr.length > 1)
        if (arr.length === 1){
            res.push(arr[0])
        }
        return res
    }