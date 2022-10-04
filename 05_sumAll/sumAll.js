const sumAll = function(firstNum, secondNum) {
    if (isNotValid(firstNum, secondNum)) return 'ERROR';
    let sum = 0;
    let startNum = firstNum < secondNum ? firstNum : secondNum;
    let endNum = firstNum > secondNum ? firstNum : secondNum;
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};

function isNotValid(firstNum, secondNum) {
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return true;
    }
    else if (firstNum < 0 || secondNum < 0) {
        return true;
    }
    return false;
}

// Do not edit below this line
module.exports = sumAll;
