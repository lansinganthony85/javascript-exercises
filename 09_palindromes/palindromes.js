const palindromes = function (string) {
    let palindrome = '';
    let text = '';

    for(let i = 0; i < string.length; i++) {
        if (string.charAt(i).toUpperCase(0) != string.charAt(i).toLowerCase() || !isNaN(parseInt(string.charAt(i))))
            text += string.charAt(i).toLowerCase();
    }

    for(let i = text.length - 1; i >= 0; i--) {
        palindrome += text.charAt(i);
    }

    return palindrome === text;
};

// Do not edit below this line
module.exports = palindromes;
