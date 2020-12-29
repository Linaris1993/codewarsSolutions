https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

    function switcher(x){
        let str = ""
        let alphabet = [' ','?','!','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '']
        let res = alphabet.reverse()
        for (let el of x){
            str += res[el]
        } return str
    }