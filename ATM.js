https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript

    function solve(n) {
        let count = 0;
        if (n % 10 !== 0) {
            return -1
        }
        let arr = [500, 200, 100, 50, 20, 10];
        for (let el of arr){
            while (n >= el){
                n = n - el; count++
            }
        } return count
    }