https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/train/javascript

    function calculate(string) {
        let arr = string.split(" ")
        return arr.includes('loses') ? +arr[2] - +arr[6] : +arr[2] + +arr[6]
    }