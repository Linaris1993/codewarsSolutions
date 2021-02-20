https://www.codewars.com/kata/57470efebf81fea166001627/train/javascript

    function letterCheck(arr) {
        arr[0] = arr[0].toLowerCase()
        let count = 0;
        for (let i = 0; i < arr[1].length; i++){
            if (arr[0].includes(arr[1][i])) {
                count++
            }
        } return count >=  arr[1].length
    }