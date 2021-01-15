https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

    function hello(came) {
        if (came === undefined || came === '') return 'Hello, World!'
        let str3 = ''
        let str = came[0].toUpperCase()
        came  = came.toLowerCase()
        for (let i = 1; i < came.length; i++){
            str3 += came[i]
        }
        let  str1 = 'Hello, '
        return  str1.concat(str,str3,'!')
    }