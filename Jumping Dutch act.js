https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript

    function sc(floor){
        if (floor <= 1 || floor < 0) return ""
        let str = ''
        str += 'Aa~ '.repeat(floor-1)
        return floor < 7 ? str + 'Pa! Aa!' : str + 'Pa!'
    }