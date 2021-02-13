https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

    function stringy(size) {
        let s1 = '1'
        let s2 = '0'
        let str = ''
        return size % 2 === 0 ?  str = (s1+s2).repeat(size/2) : str = (s1+s2).repeat(size/2) + '1'
    }