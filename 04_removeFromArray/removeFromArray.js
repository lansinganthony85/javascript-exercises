const removeFromArray = function(arr, ...args) {
    splicedArray = arr;

    for(const value of args) {

        while(splicedArray.indexOf(value) >= 0)
            splicedArray = splicedArray.toSpliced(splicedArray.indexOf(value), 1);
        
    }

    return splicedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
