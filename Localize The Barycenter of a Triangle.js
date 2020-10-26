https://www.codewars.com/kata/5601c5f6ba804403c7000004/train/javascript

    function barTriang(p1, p2, p3){
        let x = 0;
        let y = 0;
        let sum = 0;
        let arr1 = [p1[0], p2[0], p3[0]]
        for (let i = 0; i < arr1.length; i++){
            sum += arr1[i]
            x = +(sum / 3).toFixed(4)
        } let sum2 = 0;
        let arr2 = [p1[1], p2[1], p3[1]];
        for (let i = 0; i < arr2.length; i++){
            sum2 += arr2[i]
            y = +(sum2 / 3).toFixed(4)
        }
        return [x, y]
    }