module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let counts = [];
        if(!Array.isArray(arr)){
            return 0;
        }
        if(arr.length === 0){
            return 1;
        } else {
            arr.forEach((elem) => {
                counts.push(this.calculateDepth(elem));
            });
            return 1 + Math.max(...counts);
        }
    }
};