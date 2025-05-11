const sumAll = function(from, to) {

    if ((from < 0) || (to < 0) || !Number.isInteger(from) || !Number.isInteger(to)) {
        return "ERROR";
    }

    let lower;
    let higher;
    if (from <= to) {
        lower = from;
        higher = to;
    } else {
        lower = to;
        higher = from;
    }

    let toBeReturned = 0;
    for (let i = lower; i <= higher; i++) {
        toBeReturned += i;
    }
    return toBeReturned;

};

// Do not edit below this line
module.exports = sumAll;
