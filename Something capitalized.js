https://www.codewars.com/kata/56d93f249c844788bc000002/train/javascript

    const testit = s =>
        s.split(' ').map(s => s.slice(0, -1)+ s.slice(-1).toUpperCase() ).join(' ')