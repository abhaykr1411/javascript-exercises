const removeFromArray = function() {
    let inArray = arguments[0];
    for (let i = 1; i < arguments.length; i++)
    {
        while(inArray.includes(arguments[i])) inArray.splice(inArray.indexOf(arguments[i]), 1);
    }
      
    return inArray;
};

// Do not edit below this line
module.exports = removeFromArray;
