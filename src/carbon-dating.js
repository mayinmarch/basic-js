const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const K = 0.693 / HALF_LIFE_PERIOD; 

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  let activity = Number.parseFloat(sampleActivity);
  if (isNaN(activity)) {
    return false;
  }
  if (activity <= 0) {
    return false;
  }
  if (activity > 15) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / K);
    
};