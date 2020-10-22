function cutCube(volume,n){
    return (Math.round(Math.cbrt(volume)) ** 3 === volume) && (Math.round(Math.cbrt(n)) ** 3 === n) && (volume / n) % 1 === 0
}