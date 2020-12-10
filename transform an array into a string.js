https://www.codewars.com/kata/59a602dc57019008d900004e/train/javascript

    function transform(array) {
        for (let ek of array){
            if (array.includes(null)){
                return array.join('') + 'null'
            } else {
                return  array.join('')
            }
        }
    }