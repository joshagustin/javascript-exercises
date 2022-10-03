const repeatString = function(string, iterations) {
    let message = '';
    if (iterations < 0) return 'ERROR';
    for (let i = 0; i < iterations; i++) {
        message += string;
    }
    return message;
};

// Do not edit below this line
module.exports = repeatString;
