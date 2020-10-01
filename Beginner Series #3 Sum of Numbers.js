https://www.codewars.com/kata//55f2b110f61eb01779000053

    function getSum(a, b){
        let sum = 0;
        if (a < b){
            for (let i = a; i <= b; i++){
                sum += i
            }
        } else if (a > b) {
            for (let i = a; i >= b; i--){
                sum += i
            }
        } else {
            sum =  a;
        }
        return sum
    }