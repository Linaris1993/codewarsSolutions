https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript

    function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
        let arr = [age1, age2, age3,age4, age5, age6, age7, age8];
        let res = arr.reduce((a, b) => a + b * b, 0)
        return Math.trunc(Math.sqrt(res) / 2)
    }
