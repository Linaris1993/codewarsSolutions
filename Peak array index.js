https://www.codewars.com/kata/5a61a846cadebf9738000076/train/javascript

    function peak(arr){
        let res = -1
        for (let i = 0; i < arr.length; i++) {
            if (arr.slice(0, i).reduce((acc, curr) => acc + curr, 0)
                === arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0)) {
                res = i
            }
        } return res
    }