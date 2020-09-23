https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/train/javascript
    function movie(card, ticket, perc){
        let sumA = 0;
        let sumB = card;
        let times = 0;
        let ticketB = ticket
        while (Math.ceil(sumA) <= Math.ceil(sumB)){
            sumA = sumA + ticket;
            ticketB = ticketB * perc;
            sumB = sumB + ticketB
            times++
        } return times
    };