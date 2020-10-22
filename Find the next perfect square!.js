https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

    function findNextSquare(sq) {
        if (Math.sqrt (sq) % 1 !== 0) return -1
        let n =  Math.sqrt(sq);
        do {
            sq++
            n++
        } while (Math.sqrt(sq) === n && Math.sqrt(n) % 1 !== 0)
        return n ** 2
    }