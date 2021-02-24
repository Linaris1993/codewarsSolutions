https://www.codewars.com/kata/55d410c492e6ed767000004f/train/javascript

    function vowel2index(str){
        let vowels = 'aeiouAEIOU'
        let res = []
        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])){
                res.push(i + 1)
            } else {
                res.push(str[i])
            }
        }
        return res.join('')
    }