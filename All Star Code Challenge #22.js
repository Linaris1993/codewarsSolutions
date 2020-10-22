https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript

    function toTime(seconds) {
        let hour = 0;
        let minute = 0;
        if (seconds < 3600) {
            hour = 0;
            minute = Math.floor(seconds / 60)
        } else {
            hour = Math.floor(seconds / 3600)
            minute = Math.floor((seconds - (hour * 3600)) / 60)
        }
        return `${hour} hour(s) and ${minute} minute(s)`
    }