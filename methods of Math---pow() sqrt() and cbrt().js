https://www.codewars.com/kata/5733f948d780e27df6000e33/train/javascript
function cutCube(volume,n){
return (Math.round(Math.cbrt(volume)) ** 3 === volume) && (Math.round(Math.cbrt(n)) ** 3 === n) && (volume / n) % 1 === 0
}
