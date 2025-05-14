const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    let consecutiveFibonacci = [0, 1];
    let calculatedIndex = 1;
    if (n == 0) {
        return 0;
    }
    while (n > calculatedIndex) {
        let newFibonacci = consecutiveFibonacci.reduce((total, current) => total + current);
        consecutiveFibonacci[0] = consecutiveFibonacci[1];
        consecutiveFibonacci[1] = newFibonacci;
        calculatedIndex++;
    }
    return consecutiveFibonacci[1];
};

// Do not edit below this line
module.exports = fibonacci;
