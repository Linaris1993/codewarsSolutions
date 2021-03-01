https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript

    function wordsToMarks(string){
        let res = [];
        let sum = 0;
        let alphabet = "0abcdefghijklmnopqrstuvwxyz"
        for (let i = 0; i < string.length; i++){
            if (alphabet.includes(string[i])) {
                res.push(alphabet.indexOf(string[i]))
            }
        } for (let el of res){
            sum += el
        } return sum
    }