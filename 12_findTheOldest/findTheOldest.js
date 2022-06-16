const findTheOldest = function(arr) {
    const oldestAge = arr.sort((prev, curr) => {
        if(!('yearOfDeath' in curr))
            curr.yearOfDeath = (new Date()).getFullYear();
        if(!('yearOfDeath' in prev))
            prev.yearOfDeath = (new Date()).getFullYear();
        return (prev.yearOfDeath - prev.yearOfBirth) > (curr.yearOfDeath - curr.yearOfBirth) ? 1:-1;
    });
    return oldestAge[oldestAge.length - 1]; 
};

// Do not edit below this line
module.exports = findTheOldest;
