https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript

    function race(v1, v2, g) {
        if (v1 >= v2) return null;
        let sec = (g * 3600) / (v2 - v1)
        return [Math.trunc(sec / 3600), Math.trunc((sec % 3600) / 60), Math.trunc(sec % 60)];
    }