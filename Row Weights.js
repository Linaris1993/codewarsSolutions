https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

    function rowWeights(array){
        let sumEven = 0;
        let sumOdd = 0;
        for (let i = 0; i < array.length; i++){
            if (i % 2 === 0){
                sumEven += array[i]
            } else {
                sumOdd += array[i]
            }
        } return [sumEven, sumOdd]
    }