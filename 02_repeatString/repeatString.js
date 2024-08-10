const repeatString = function(word, num) {
    let combinedString = "";
    if(num < 0) return "ERROR";

    for(let i = 0; i < word.length; i++) combinedString += word;
    return combinedString;
};

// Do not edit below this line
module.exports = repeatString;
