const sumAll = function(num1, num2) {
    let sum = 0;
    if (!(Number.isInteger(num1) && Number.isInteger(num2))) return 'ERROR';
    if (num1 < 0 || num2 < 0) return 'ERROR';
    
    let max = (num1 > num2)? num1 : num2;
    let min = (num1 > num2)? num2 : num1;
    
    while(min <= max)
    {
        sum += min;
        min++;
    } 
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
