const fibonacci = function(num) {

    if(typeof num === 'string')
        value = parseInt(num);
    else
        value = num;

    if(value < 0)
        return "OOPS";

    if(value == 1)
        return 1;

    let fibonacci = 0;
    let first = 0;
    let sec = 1;

    for(let i = 1; i < value; i++) {
        fibonacci = first + sec;
        first = sec;
        sec = fibonacci;
    }

    return fibonacci;
};

// Do not edit below this line
module.exports = fibonacci;
