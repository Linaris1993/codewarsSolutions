https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript

    function arrayMadness(a, b) {
        let res1 = a.reduce((acc, curr) => acc + curr**2, 0)
        let res2 = b.reduce((acc, curr) => acc + curr**3, 0)
        return res1 > res2
    }