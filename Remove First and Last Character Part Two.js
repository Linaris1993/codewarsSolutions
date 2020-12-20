https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

    function array(arr){
        let res = arr.split(',')
        res = res.slice(1, -1)
        return res.length !== 0 ? res.join(' ') : null
    }