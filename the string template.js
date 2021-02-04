https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

    function fiveLine(s){
        s = s.trim()
        let count = 5;
        let str = ''
        for (let i = 1; i <= count; i++){
            str += '\n'+ s.repeat(i)
        } return str.trim()
    }