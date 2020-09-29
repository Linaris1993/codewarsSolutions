https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript
function isPowerOfTwo(n){
    if (n > 1)
        while (n % 2 === 0){
            n = n / 2
        } return n === 1
}