https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
    function calculateYears(P, I, T, D){
        let year = 0;
        while (P < D) {
            let P1 = P * (1 + I)
            let T1 = (P1 - P) * T
            P = P1 - T1
            year++;
        }
        return  year
    }