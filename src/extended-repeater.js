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

  let myStr = "Hello";
  let myOptions = {
    repeatTimes: 3,
    separator: ' ~~ ',
    addition: 'friend',
    additionRepeatTimes: 1,
    additionSeparator: '00'
  };
  
  let fromTestStr = 'TESTstr';
  let fromTestOptions = { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' };



function repeater(str, options) {
  let addition = options.addition;
  let strAddition = "";
  let arrWords = [];
  let result = '';
  
  if (typeof options !== 'object')  {
    return false;
  }

  if (options.additionSeparator) {
    if (options.additionRepeatTimes > 1) {
      addition += options.additionSeparator;
    }
  }
  
  if (options.additionRepeatTimes) {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
      addition += addition; 
    }
  }
  
  if (options.addition) {
    strAddition = (str + addition);
  } else {
    strAddition = str;
  }
  
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      arrWords.push(strAddition);
    }
  }
  
  if (options.separator) {
    result = arrWords.join(`${options.separator}`);
  } else {
    result = arrWords.join('+');
  }

  console.log(strAddition);
  return result;
}
console.log(repeater(myStr, myOptions));
console.log(repeater(fromTestStr, fromTestOptions));









module.exports = {
  repeater
};
