const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

function letterPosition(letter){
    return ALPHABET.indexOf(letter.toUpperCase());
}

function positionToLetter(position){
    return ALPHABET[position];
}

function isLetter(character){
    if(letterPosition(character) === -1){
        return false;
    } else {
        return true;
    }
}

class VigenereCipheringMachine {
    constructor(isDirect = true){
        this.isDirect = isDirect;
    }

    encrypt(message, key) {
        if(message === undefined){
            throw Error('message undefined');
        }
        if(key === undefined){
            throw Error ('key undefined');
        }

        let result = '';
        let keyIndex = 0;
        message.split('').forEach((e) => {
            if(isLetter(e)){
                let x = letterPosition(e);
                let y = letterPosition(key[keyIndex]);
                result += positionToLetter((x + y) % 26);
                if(keyIndex === key.length - 1){
                    keyIndex = 0;
                } else {
                    keyIndex += 1;
                }  
            } else {
                result += e; 
            }
        })
        if(!this.isDirect){
            return result.split('').reverse().join('');
        } else {
            return result;
        }
    }

    decrypt(message, key) {
        if(message === undefined){
            throw Error('message undefined');
        }
        if(key === undefined){
            throw Error ('key undefined');
        }
        
        let result = '';
        let keyIndex = 0;
        message.split('').forEach((e) => {
            if(isLetter(e)){
                let x = letterPosition(e);
                let y = letterPosition(key[keyIndex]);
                result += positionToLetter((26 + x - y) % 26);
                if(keyIndex === key.length - 1){
                    keyIndex = 0;
                } else {
                    keyIndex += 1;
                }  
            } else {
                result += e; 
            }
        })
        if(!this.isDirect){
            return result.split('').reverse().join('');
        } else {
            return result;
        }
    }
}

module.exports = VigenereCipheringMachine;
