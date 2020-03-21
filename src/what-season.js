module.exports = function getSeason(date) {
  if (date === undefined){
    return 'Unable to determine the time of year!';
  }
  if (!date instanceof Date){
    throw Error('not date');
  }
  if (Object.prototype.toString.call(date).slice(8, -1) !== 'Date'){
    throw Error('not date');
  }

  let month = date.getMonth();
  if(month >= 11 || month <= 1){
    return 'winter';
  }
  else if(month >= 2 && month <= 4){
    return 'spring';
  }
  else if(month >= 5 && month <= 7){
    return 'summer';
  }
  else if(month >= 8 && month <= 10){
    return 'autumn';
  }
};
