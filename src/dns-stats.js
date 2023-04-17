const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let all = [];
  let fin = {};
  
  for(let x of domains) {
    let y = x.split('.');
    all = all.concat(y);
  }
  
  let unic = [...new Set(all)];

  for(let i = 0; i < unic.length; i++) {
    let counter = 0;
    for(let t of all) {
      if(unic[i] == t) {
        counter++;
      }
    }
    fin[`.${unic[i]}`] = counter;
  }

  

}

module.exports = {
  getDNSStats
};
