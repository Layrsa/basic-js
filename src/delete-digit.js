const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let x = [];
  let y = String(n);
  let z = y.split('');
  let t = 0;
  for (let i = 0; i < z.length; i++) {
    let t = 0;
    for (let e = 0; e < z.length; e++) {
      if (e == i) {
        continue
      }
      t = t + z[e];
    }
    let w = Number(t)
    x.push(w);
  }
  return(Math.max.apply(null, x))
}

module.exports = {
  deleteDigit
};
