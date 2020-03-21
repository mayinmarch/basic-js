const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if(value === undefined){
      this.result.push('( )');
    } else {
    this.result.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || position <= 0 || position > this.result.length){
      this.result = [];
      throw Error('invalid position');
    }
    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let resultArr = this.result;
    this.result = [];
    return resultArr.join('~~');
  }
};

module.exports = chainMaker;
