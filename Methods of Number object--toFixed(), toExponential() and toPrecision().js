https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

    function howManySmaller(arr,n){
        let count = []
        let res = arr.map(el => +el.toFixed(2))
        for (let el of res){
            if (el < n){
                count.push(el)
            }
        } return count.length
    }