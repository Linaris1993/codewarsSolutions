https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

    function XO(str) {
        console.log(str)
        let res = str.toLowerCase()
        let countO = 0;
        let countX = 0;
        for (let el of res){
            if (el === 'o'){
                countO++
            }
            else if (el === 'x'){
                countX++
            }
        } return  countO === countX
    }