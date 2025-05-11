const removeFromArray = function(array, ...parameters) {
    let toBeReturned = array;
    console.log(toBeReturned);
    console.log(parameters);
    for (let parameter of parameters) {
        toBeReturned = toBeReturned.filter((element) => parameter !== element);
        console.log(`iterated through parameter: ${parameter}, array now looks like this: ${toBeReturned}`);
    }
    console.log(toBeReturned);
    return toBeReturned;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
