https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

    function removeSmallest(numbers) {
        let arr = [];
        let min = Math.min(...numbers)
        for (let i = 0; i < numbers.length; i++){
            if (numbers.indexOf(min) !== i) {
                arr.push(numbers[i])
            }
        } return arr
    }