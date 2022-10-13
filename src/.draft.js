// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

const newDreamTeam = ['Matt', 'Ann', 'Dmitry', 'Max'];
const newDreamTeam2 = ['Olivia', 1111, '        Lily'   , 'Oscar', true, null];
const newDreamTeam3 = [NaN, 1111, undefined, true, null];

function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let firstLettersStr = [];
  
    members.forEach(item => {
      if (typeof item === 'string') {
        firstLettersStr += item.trim().slice(0, 1).toUpperCase();
      } 
    });
  
    if (typeof firstLettersStr === 'string') {
      let newName = firstLettersStr.split('').sort().join('');
      return newName;
    } else {
      return false;
    }
  } else {
    return false;
  }
}



console.log(createDreamTeam(12));


// module.exports = {
//   createDreamTeam
// };
