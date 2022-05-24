const sumAll = function(num1, num2) {
    if(typeof(num1) != "number" || typeof(num2) != "number")
        return "ERROR";
    if(num1 < 0 || num2 < 0)
        return "ERROR"
    let max, min;
    if(num1 > num2){
        max = num1;
        min = num2;
    }
    else if(num2 > num1){
        max = num2;
        min = num1;
    }
    else{
        max = num2;
        min = num2;
    }
    let sum = min;
    for(let i = min + 1; i <= max; i++)
        sum += i;
    return sum;
};



// Do not edit below this line
module.exports = sumAll;
