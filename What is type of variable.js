https://www.codewars.com/kata/57293671c98f77e84b000065/train/javascript

    function type(value) {
    let s = ({}).toString.call(value)
        return  (s === "[object Number]") ? 'number'
            : (s === "[object String]") ? 'string'
                : (s === "[object Array]") ? 'array'
                    : (s === "[object Date]") ? 'date'
                        : (s === "[object Null]") ? 'null'
                            : (s === "[object Undefined]") ? 'undefined'
                                : 'object'
    }