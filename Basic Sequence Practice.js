https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/javascript

    function sumOfN(n) {
        if (n === 0) return [0]
        let arr = [];
        let sum = 0;
        let i = 0;
        if (n > 0) do {
            sum += i
            arr.push(sum)
            i++
        } while (arr.length <= n)
        else if (n < 0) do {
            n = Math.abs(n)
            sum += i
            arr.push(sum)
            i--
        } while (arr.length <= n)
        return arr
    }