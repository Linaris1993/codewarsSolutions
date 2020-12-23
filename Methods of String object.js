https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

    function cutIt(arr){
        let res = arr.slice()
        res.sort((a, b) => a.length - b.length)
        return arr.map(el=> el.slice(0, res[0].length))
    }