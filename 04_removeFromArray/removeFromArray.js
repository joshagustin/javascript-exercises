const removeFromArray = function(oldArr, ...elements) {
    if (arguments.length < 2) return oldArr;
    const newArr = [];
    outer: 
    for (const item of oldArr) {
        for (const element of elements) {
            if (item === element) continue outer;
        }
        newArr.push(item);
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
