https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

    function firstToLast(str,c){
        let count = 0;
        for (let el of str){
            if (el === c){
                count++
            }
        }
        return count >= 2  ? str.lastIndexOf(c) - str.indexOf(c) : count === 0 ? -1 : 0
    }