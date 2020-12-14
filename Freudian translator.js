https://www.codewars.com/kata/5713bc89c82eff33c60009f7/train/javascript

    function toFreud(string) {
        if (string.length === 0) return string
        let amount = string.split(' ').length;
        let res = [];
        for (let i = 1; i <= amount; i++){
            res.push('sex')
        } return res.join(' ')
    }