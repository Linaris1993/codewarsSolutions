https://www.codewars.com/kata/58fa273ca6d84c158e000052/train/javascript

    function digits(n) {
        if (n === 0) return 1
        let str = "";
        let last;
        while (n > 0){
            last = n % 10;
            str += last
            n = (n - last) / 10

        }
        return str.length
    }