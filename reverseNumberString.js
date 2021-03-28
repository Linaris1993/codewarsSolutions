function reverse(n){
    let str = '';
    do {
        let last = n % 10
        str += last
        n = (n - last) / 10
    }
    while( n < 0)
    return str
}