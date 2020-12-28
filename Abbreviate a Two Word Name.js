https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

    function abbrevName(name){
        let n;
        for (let i = 0; i < name.length; i++){
            if (name[i] === ' ') {
                n =  name[i+1]
            }
        }
        return name[0].toUpperCase() + "." + `${n}`.toUpperCase()
    }