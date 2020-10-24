https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

    function expressionMatter(a, b, c) {
        let r1 = a * b * c;
        let r2 = a * (b + c)
        let r3 = a + (b + c)
        let r4 = (a + b) * c
        let arr = [r1, r2, r3, r4]
        return Math.max(...arr)
    }