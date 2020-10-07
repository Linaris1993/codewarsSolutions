https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

    function padIt(str,n){
        let res = str;
        let arr = [];
        let i = 1;
        do {
            (i % 2 === 0)? res = res + "*" : res = "*" + res
            i++
            arr.push(i)
        }
        while (i <= n)
        return res
    }