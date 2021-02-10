https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript

    function billboard(name, price = 30){
        let count = '';
        let l = 0;
        for (let i = 0; i < name.length; i++){
            count += name[i]
        }  let res = count.repeat(price)
        return res.length
    }