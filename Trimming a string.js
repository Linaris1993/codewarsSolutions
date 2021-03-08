https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript

    function trim(arr, size) {
        let f = size - 3
        return arr.length <= 2 ?  arr.slice(0, size) + '...' : arr.length > size ? arr.slice(0, f) + '...' : arr
    }