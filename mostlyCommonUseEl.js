function maxChar(str){
    let res = '';
    let  countMax = 0;
    for (let i = 0; i < str.length; i++){
        let count = 0;
        for (let j = 0; j < str.length; j++){
            if (str[i] = str[j]){
                count++
            }
        }
        if (count > max){
            res = str[i]
            max = count;
        }
    }
    return res
}