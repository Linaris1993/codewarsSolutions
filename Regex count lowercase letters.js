https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript

    function lowercaseCount(str){
        let count = 0;
        for (let el of str){
            if(el >= 'a' && el <='z') {
                count++
            }
        } return count
    }