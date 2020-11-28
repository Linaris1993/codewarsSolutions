https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript
    function minSum(arr) {
        arr.sort((a, b) => a - b)
        let mult = 0;
        let g = arr.length -1;
        for (let i = 0; i < arr.length / 2; i++){
            mult += arr[i] * arr[g]
            g--
        }  return mult
    }