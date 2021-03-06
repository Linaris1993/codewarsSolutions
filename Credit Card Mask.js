https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

    function maskify(cc) {
        if (cc.length < 4) return cc
        let l = cc.length
        let d = l - 4
        let s = '#'
        return s.repeat(d).concat(cc.slice(-4))
    }