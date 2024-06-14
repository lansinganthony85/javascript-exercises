const sumAll = function(first, second) {

if(!(typeof first === "number") || !(typeof second === "number"))
    return 'ERROR';
else if(first < 0 || second < 0)
    return 'ERROR';

return ((Math.max(first, second) - Math.min(first, second) + 1)/2) * (first + second);
};

// Do not edit below this line
module.exports = sumAll;
