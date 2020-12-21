https://www.codewars.com/kata/5a145ab08ba9148dd6000094/train/javascript

    function doubles(s){
        let res = []
        for (let i = 0; i < s.length; i++) {
            if (res[res.length -1] === s[i]){
                res.pop()
            } else {
                res.push(s[i])
            }
        } return res.join('')
    }