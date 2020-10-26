https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/train/javascript

    function excludingVatPrice(price){
        let percent = (15 / 100) + 1
        return (price !== null ) ? +(price / percent).toFixed(2) : -1
    }