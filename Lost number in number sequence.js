https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript

    function findDeletedNumber(arr, mixArr) {
        if (arr.length === 0) return 0
        let res1 = arr.reduce((acc, curr) => acc + curr)
        let res2 = mixArr.reduce((acc, curr) => acc + curr)
        return res1 - res2
    }