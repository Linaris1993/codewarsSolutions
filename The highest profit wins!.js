https://www.codewars.com/kata/559590633066759614000063/train/javascript

    function minMax(arr){
        let max = Math.max(...arr)
        let min = Math.min(...arr)
        let res = []
        for (let i = 0; i <= arr.length; i++){
            res.push(i)
        }
        return [min, max]
    }