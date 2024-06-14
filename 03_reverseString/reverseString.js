const reverseString = function(textToReverse) {
    reversedText = [];

    for(const letter of textToReverse.split("")) {
        reversedText.unshift(letter);
    }

    return reversedText.join("");
};

// Do not edit below this line
module.exports = reverseString;
