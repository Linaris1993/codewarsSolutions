https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

    function solve(s){
        let countLower = 0;
        let countUp = 0;
        let arr = s.split('')
        for (let el of arr){
            if (el >= 'a' && el <= 'z'){
                countLower++
            } else {
                countUp++
            }
        }
        return countUp > countLower ? arr.join('').toUpperCase() : arr.join('').toLowerCase()
    }