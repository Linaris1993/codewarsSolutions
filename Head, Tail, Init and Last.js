https://www.codewars.com/kata/54592a5052756d5c5d0009c3/train/javascript

    function head(arr1){
        let res1 = arr1.slice()
        return res1[0]
    }
function tail(arr1){
    let res2 = arr1.slice()
    res2.shift()
    return res2
}
function init(arr1){
    let res3 = arr1.slice()
    res3.pop()
    return res3
}
function last(arr1){
    let res4 = arr1.slice()
    return res4.pop()
}