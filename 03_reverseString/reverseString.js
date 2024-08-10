const reverseString = function(sentence) {
    let reversed = "";
    for(let i = 0; i < sentence.length; i++) reversed += sentence[sentence.length - (i + 1)];
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
