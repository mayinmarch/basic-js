module.exports = function countCats( matrix ) {
  let count = 0;
  for ( let i = 0; i < matrix.length; i++ ) {
    let subMatrix = matrix[i];
    for ( let j = 0; j < subMatrix.length; j ++ ) {
      if ( subMatrix[j] === '^^' ) {
        count += 1;
      }
    }
  }
  return count;
};
