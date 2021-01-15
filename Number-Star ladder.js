https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript

    function pattern(n){
        let str1 = ''
        for (let i = 1; i < n;i++){
            if (i < n){
                str1 +=  i + '\n1' + '*'.repeat(i)
            }
        }
        return str1 + n
    }