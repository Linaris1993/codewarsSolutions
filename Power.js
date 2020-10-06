https://www.codewars.com/kata//562926c855ca9fdc4800005b

    function numberToPower(number, power){
        if (power === 0) return 1
        let mult = 0;
        let res = 1;
        do {
            res *= number
            mult++
        }
        while (mult < power)
        return res
    }
