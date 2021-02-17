// console.log('hellow');
// console.log('hwgiwf')
//
// setTimeout( function() {
//     console.log('after 2 sec')
// }, 2000 );

async function sum(a, b){
    return a + b
}
async function foo(){
    let result = await sum(5, 10)
    return result;
}
async function too(){
    let result = await foo()
    console.log(result)
}
setTimeout( () => {
    console.log('message1');
    const data ={
        key: 'value'
    }
    setTimeout( () => {
        console.log('message2')
        data.receive = true;
        console.log(data)
    }, 2000)
}, 4000)
const p = new Promise(function(resolve, reject){
    setTimeout( () => {
        console.log('message1');
        const data = {
            key : 'value'
        }
        resolve(data)
    }, 1500)
})
    p
        .then( (res) => {
            console.log('it all good', res)
            return new Promise((resolve, reject) => {
                setTimeout( () => {
                    console.log(res)
                    res.receive = true;
                    resolve(res)
                }, 2000)
            })
        })
    p
        .then((res) => {
           console.log(res)
        })