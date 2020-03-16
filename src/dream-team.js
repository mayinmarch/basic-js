module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }
  let abbr = [];
  members.forEach(element => {
    if(typeof element === 'string'){
      element = element.trim().toUpperCase();
      abbr.push(element[0]);
    }
  })
  let result = '';
  abbr.sort();
  abbr.forEach(element => result += element);
  return result;
};