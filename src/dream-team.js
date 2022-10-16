const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false
  }
  let u = [];
  for(let i = 0; i < members.length; i++) {
    if(typeof(members[i]) === 'string') {
      let r = members[i].trim();
      r = r[0].toUpperCase();
      u.push(r)
      }
      
      
    
  }
  return u.sort().join('');
}

module.exports = {
  createDreamTeam
};
