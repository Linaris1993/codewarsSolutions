https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript

    function bigToSmall(arr){
        arr  = [].concat(...arr)
        let res = arr.sort((a, b) => a - b)
        res.reverse()
        res = res.join('>')
        return res
    }