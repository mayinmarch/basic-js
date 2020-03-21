module.exports = function transform(arr) {
    if(!Array.isArray(arr)){
        throw Error('is not array');
    }

    let resultArr = [];
    for(let indx = 0; indx < arr.length; indx++){
        switch(arr[indx]){
            case '--discard-next':
                if(indx !== arr.length - 1){
                    indx = indx + 1;
                }
                break;
            case '--discard-prev':
                if(indx !== 0){
                    resultArr.pop();
                }
                break;
            case '--double-next':
                if(indx !== arr.length - 1){
                    resultArr.push(arr[indx+1]);
                }
                break;
            case '--double-prev':
                if(indx !== 0){
                    resultArr.push(arr[indx-1]);
                }
                break;
            default:
                resultArr.push(arr[indx]);
        }
    }
    return resultArr;
};

