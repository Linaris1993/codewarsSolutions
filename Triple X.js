https://www.codewars.com/kata/568dc69683322417eb00002c/train/javascript

    function tripleX(str){
        let index = 0;
        for (let i = 0; i < str.length; i++){
            index = str.indexOf('x')
        } return (str.indexOf('x', index + 1) - index) === 1 && (str.indexOf('x', index + 2) - index) === 2
    }

function tripleX(str){
    return str.substr(str.indexOf('x') +1,2) === 'xx'
}
