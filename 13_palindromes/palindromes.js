const palindromes = function (string) {
    let compressedString = string.replace(/[!., ]/g, '');
    let length = compressedString.length;
    for (let i = 0; i < Math.ceil(length/2); i++) {
        if (compressedString.at(-i - 1).toLowerCase() !== compressedString.at(i).toLowerCase()) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
