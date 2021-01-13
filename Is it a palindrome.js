https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

    function isPalindrome(x) {
        let n = '';
        x = x.toLowerCase()
        for (let i = x.length -1; i >= 0; i--){
            n += x[i]
        } return x === n
    }