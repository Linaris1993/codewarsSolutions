https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
    if (n > 0 && n < 13) {
        return  n = n - 1;
    } else if (n > 13) {
        return  n =  n - 2
    }  else {
        return  n
    }
}