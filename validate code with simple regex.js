https://www.codewars.com/kata/56a25ba95df27b7743000016/train/javascript

    function validateCode (code) {
        let str = code + ''
        return str.startsWith('1') || str.startsWith('2') || str.startsWith('3')
    }