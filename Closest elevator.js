https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript

    function elevator(left, right, call){
        let res1 = Math.abs(left - call);
        let res2 = Math.abs(right - call);
        if (res1 < res2){
            return "left"
        } else {
            return "right"
        }
    }