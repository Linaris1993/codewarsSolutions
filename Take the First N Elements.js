https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript

    function take(arr, n) {
        if (arr.length === 0) return []
        let res = [];
        for (i = 0; i < n; i++){
            if (arr.length < n){
                return arr
            } else {
                res.push(arr[i])
            }
        } return res
    }