https://www.codewars.com/kata//580777ee2e14accd9f000165

    function skiponacci(n){
        console.log(n)
        let fib = [0, 1]
        for (let i = 2; i <= n; i++){
            fib.push(fib[i - 1] + fib[i - 2])
        } let res =  fib.filter((el, i) => i % 2 !== 0)
        return (fib.length - (res.length * 2) !== 0) ? res.join(' skip ') + ' skip' : res.join(' skip ')
    }

