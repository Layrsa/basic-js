const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let x = sampleActivity;
  if (typeof(x) !== 'string' ) {
    return false
  }

  let y = Number(x);

  if (typeof(y) !== 'number') {
    return false
  }

  if (y == 0) {
    return false
  }

  if (y !== y ) {
    return false
  }

  if (y < 1 || y >= 15) {
    return false
  }

  

  
  
  let z = (Math.log(MODERN_ACTIVITY/y))/(0.693/HALF_LIFE_PERIOD);
  let w = Math.ceil(z);
  return w

}

module.exports = {
  dateSample
};
