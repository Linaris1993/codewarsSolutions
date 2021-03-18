function reverse(n){
    let arr = [];
    do {
        let last = n % 10;
        arr.push(last)
        n = Math.floor(n / 10)
    }  while (n > 0)
    return arr
}