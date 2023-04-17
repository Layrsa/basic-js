const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date = 'empty') {
  if(date === 'empty'){
    return 'Unable to determine the time of year!'
  }

  if (!date
    || typeof date !== 'object'
    || typeof date.getMonth !== "function"
    || !(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  try {
    const dateCheck = new Date(date.toString());
    if (dateCheck.getFullYear() !== date.getFullYear()) {
      throw new Error('Invalid date!');
    }
  } catch (e) {
    throw new Error('Invalid date!');
  }

  if(date instanceof Date) {

      let m = date.getMonth();

      switch(m) {
        case 0:
        case 1:
        case 11:
          return 'winter';

        case 2:
        case 3:
        case 4:
          return 'spring';
        
        case 5:
        case 6:
        case 7:
          return 'summer';

        case 8:
        case 9:
        case 10:
          return 'fall';

      }
  }
}

module.exports = {
  getSeason
};
