https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7/train/javascript

    function sumSquares(array) {
        let res = array.reduce((acc, curr) => curr**2 + acc, 0)
        return res
    }