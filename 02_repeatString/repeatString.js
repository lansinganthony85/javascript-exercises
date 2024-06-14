const repeatString = function(textToRepeat, occurence) {

    if(occurence < 0)
        return 'ERROR';
    
    repeatedText = "";
    for(let i = 0; i < occurence; i++) {
        repeatedText += textToRepeat;
    }

    return repeatedText;
};

// Do not edit below this line
module.exports = repeatString;
