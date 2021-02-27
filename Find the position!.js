https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript

    function position(letter){
        let alphabet = "abcdefghijklmnopqrstuvwxyz"
        return alphabet.includes(letter) ? `Position of alphabet: ${alphabet.indexOf(letter)+1}` : -1
    }