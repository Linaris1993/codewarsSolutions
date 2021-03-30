function reverse(n){
    const reversed = n
        .toString().split('').reverse().join();
    if (n < 0){
        return ParseInt(reversed) * -1;
    }
}