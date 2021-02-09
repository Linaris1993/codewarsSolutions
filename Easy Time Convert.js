https://www.codewars.com/kata/5a084a098ba9146690000969/train/javascript

    function timeConvert(num) {
        if (num < 0 || num === 0) return '00:00'
        let m = num % 60
        let h = (num - m) / 60
        return (h < 10 ? '0' : '') + h.toString() + ':' + (m < 10 ? '0' : '') + m.toString()
    }