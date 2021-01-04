https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript

    function getSumOfDigits(integer) {
        let sum = 0;
        let last;
        while (integer > 0){
            last = integer % 10;
            sum += last
            integer = (integer - last) / 10
        }
        return sum
    }