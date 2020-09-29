https://www.codewars.com/kata//5592e3bd57b64d00f3000047
    function findNb(m) {
        let a = 1;
        let count = 0;
        let sum = 0;
        while (sum < m){
            sum += a ** 3
            count++
            a++
        }
        return sum === m ? count : -1
    }
