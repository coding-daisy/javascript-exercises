const reverseString = function(string) {
    let toBeReturned = "";
    for (let i = string.length - 1; i >= 0; i --) {
        toBeReturned += string[i];
    }
    return toBeReturned;
};

// Do not edit below this line
module.exports = reverseString;
