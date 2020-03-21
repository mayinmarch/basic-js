module.exports = function repeater(str, options) {
    if(typeof str !== 'string'){
        str = String(str);
    }
    if (options.addition!== undefined && typeof options.addition !== 'string'){
        options.addition = String(options.addition);
    }
    if(options.repeatTimes === undefined){
        options.repeatTimes = 1;
    }
    if(options.additionRepeatTimes === undefined){
        options.additionRepeatTimes = 1;
    }
    if(options.separator === undefined){
        options.separator = '+';
    }
    if(options.additionSeparator === undefined){
        options.additionSeparator = '|';
    }


    let strWrapper = [];
    let baseStr = '';
    if(options.addition !== undefined){
        let subArr = [];
        for(let i = 0; i < options.additionRepeatTimes; i ++){
            subArr.push(options.addition);
        }
        baseStr = str + subArr.join(options.additionSeparator);
    } else {
        baseStr = str;
    }

    for (let i = 0; i < options.repeatTimes; i ++){
        strWrapper.push(baseStr);
    }
    return strWrapper.join(options.separator);
};
  

//repeater(9.234, { repeatTimes: 4, separator: '||', addition: {a: 5}, additionRepeatTimes: 3, additionSeparator: '&&' })