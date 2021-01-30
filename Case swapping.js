https://www.codewars.com/kata/5590961e6620c0825000008f/train/javascript

    function swap(str){
        let res = ''
        for (let el of str){
            if (el >= 'a' && el <= 'z'){
                res += el.toUpperCase()
            } else {
                res += el.toLowerCase()
            }
        } return res
    }