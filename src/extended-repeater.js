const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let repeatTimes = 1;
  let additionRepeatTimes = 1;
  let separator = '+';
  let addition = '';
  let additionSeparator = '|';
  let res = [];
  if (options && typeof options === 'object') {
    if (options.hasOwnProperty('repeatTimes')) {
        repeatTimes = Number(options.repeatTimes);
    }
    if (options.hasOwnProperty('additionRepeatTimes')) {
        additionRepeatTimes = Number(options.additionRepeatTimes);
    }
    if (options.hasOwnProperty('separator')) {
        separator = String(options.separator);
    }
    if (options.hasOwnProperty('addition')) {
        addition = String(options.addition);
    }
    if (options.hasOwnProperty('additionSeparator')) {
        additionSeparator = String(options.additionSeparator);
    }
  }
  for (let i = 0; i < repeatTimes; ++i) {
    res.push(str + Array(additionRepeatTimes).fill(addition).join(additionSeparator));
  }
  return res.join(separator);
}

module.exports = {
  repeater
};
