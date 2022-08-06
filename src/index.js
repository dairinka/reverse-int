module.exports = function reverse (n) {
   let reverseUnit = Math.abs(n).toString().split('').reverse().join('');
  return Number(reverseUnit);
}
