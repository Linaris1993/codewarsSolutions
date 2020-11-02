https://www.codewars.com/kata/582642b1083e12521f0000da/train/javascript

    function arrayMash (array1, array2) {
        let res = [];
        for (let i = 0; i < array1.length; i++){
            res.push(array1[i])
            res.push(array2[i])
        }
        return res
    }