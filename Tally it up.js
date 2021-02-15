https://www.codewars.com/kata/5630d1747935943168000013/train/javascript

    function scoreToTally(score){
        let str = ''
        let br = ' <br>'
        let s = score % 5
        let arr = ['','a', 'b', 'c', 'd', 'e']
        for (let el of arr){
            if (score < 5 && arr.indexOf(el) === score){
                str = el
            } if (score >= 5 && score <= 9 && arr.indexOf(el) === s) {
                str = 'e' + br + el
            }   if (score >= 10 && arr.indexOf(el) === s){
                str = 'e' + (br + 'e').repeat((score / 5) -1) + br + el
            }
        } return str
    }