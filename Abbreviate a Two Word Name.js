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

//another solution
function abbrevName(name){
 let str2 = ''
 let res = name.split(' ').map((el, i) => {
    if (i === 0) {
    return el[0].toUpperCase()
    }
    else {
     return el[0].toUpperCase()
    }
  }
 )
res.join('')
for (let i = 0; i < res.length; i++) {
  if (i < res.length) {
  str2 += res[i] + '.'
}
}
return str2.slice(0, -1)
}
