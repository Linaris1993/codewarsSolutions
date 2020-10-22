https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript

    function mango(quantity, price){
        let countFree = 0;
        let arr = [];
        for (let i = 3; i <= quantity; i+=3){
            arr.push(i)
            countFree++
        } return (quantity - countFree) * price
    }