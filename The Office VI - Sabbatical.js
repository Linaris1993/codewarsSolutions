https://www.codewars.com/kata/57fe50d000d05166720000b1/train/javascript

    function sabb(x, val, happiness){
        let count = 0;
        let str = 'sabbatical'
        for (let i = 0; i < x.length; i++){
            let letter = x[i]
            if (str.includes(letter.toLowerCase()))
                count++
        }
        return (count + val + happiness) > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
    }