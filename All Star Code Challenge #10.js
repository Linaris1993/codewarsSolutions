https://www.codewars.com/kata/58646a1173bd9c86080000ef/train/javascript

    function  fibonacci(n){
        if (n  === 0) return 0
        let fib = [0, 1];
        for (let i = 2; i <= n; i++){
            fib.push(fib[i-1]+fib[i-2])
        }
        for (let i = 0; i < fib.length; i++){
            if (n === i){
                return fib[i]
            }
        }
        return arr
    }