https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

    function number(busStops){
        let sum1 = 0;
        let sum2 = 0;
        for (let i = 0; i < busStops.length; i++){
            sum1 = sum1 + busStops[i][0]
            sum2 = sum2 + busStops[i][1]
        } return sum1 - sum2
    }