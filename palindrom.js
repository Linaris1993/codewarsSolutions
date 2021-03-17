function palilindtom(str){
    return str.split('').every((el, i) => el === str[str.length - i - 1])
}