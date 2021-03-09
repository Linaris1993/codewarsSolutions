https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

    function createPhoneNumber(numbers){
        numbers = numbers.join("")
        let res = ""
        let first = numbers.slice(0, 3)
        let second = numbers.slice(3, 6)
        let end = numbers.slice(-4)
        return `(${first}) ${second}-${end}`
    }