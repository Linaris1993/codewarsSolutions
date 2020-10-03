https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript

    function drawStairs(n) {
        let str = ''
        for (let i = 0; i < n; i++){
            str = str  + ' '.repeat(i) + 'I'
            if (i < n - 1) {
                str = str + '\n'
            } else if (i === n) {
                str = str + 'I'
            }
        }
        return str
    }