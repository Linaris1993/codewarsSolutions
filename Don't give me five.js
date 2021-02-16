https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

    function dontGiveMeFive(start, end){
        let r = [];
        let arr = [];
        for (let i = start; i <= end; i++){
            arr.push(i)
        }  arr = arr.join(" ").split(" ")
        for (let el of arr){
            if (!el.includes('5')){
                r.push(+el)
            }
        } return r.length
    }