https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

    function accum(s) {
        s = s.toLowerCase()
        let str = ''
        let first = ''
        for (let i = 0; i < s.length; i++){
            str += s[i].toUpperCase() + s[i].repeat(i) + '-'
        }
        str =  str.split('')
        str.pop()
        return str.join('')
    }