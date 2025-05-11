const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }

    let toBeReturned = "";
    for (let i = 0; i < num; i ++) {
        toBeReturned += string;
    }
    return toBeReturned;
};

// Do not edit below this line
module.exports = repeatString;
