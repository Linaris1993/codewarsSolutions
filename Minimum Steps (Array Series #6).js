https://www.codewars.com/kata/5a91a7c5fd8c061367000002/train/javascript

    function minimumSteps(numbers, value){
        numbers.sort((a, b) => a - b)
        let sum = 0;
        for (let i = 0; i < numbers.length; i++){
            sum += numbers[i]
            if (sum >= value) return i
        }
    }