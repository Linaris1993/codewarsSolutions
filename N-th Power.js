https://www.codewars.com/kata/57d814e4950d8489720008db/solutions/javascript
    function index(array, n){
        for (let i = 0; i < array.length; i++){
            return (array.length > n) ? Math.pow(array[n], n) : -1
        }
    }