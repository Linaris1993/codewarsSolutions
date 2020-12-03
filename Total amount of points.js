https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

    function points(games) {
        let count = 0;
        for(let i = 0; i < games.length; i++){
            if (games[i][0] > games[i][2]){
                count = count + 3
            } else if (games[i][0] === games[i][2]){
                count = count + 1
            } else {
                count = count + 0;
            }
        } return count
    }