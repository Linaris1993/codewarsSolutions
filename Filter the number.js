https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
function FilterString(value) {
    let res = ''
    for (i = 0; i < value.length; i++){
        if (isNaN(value[i]) === false){
            res = res + value[i]
        }
    } return +res
}