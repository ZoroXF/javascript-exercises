const removeFromArray = function(...args) {
    const arr = args[0];
    let result = [];
    for(let i = 0; i < arr.length ; i++){
        if(args.includes(arr[i]))
            continue;
        result.push(arr[i]);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
