const fibonacci = function(index) {
    let num = Number(index);
    if (num < 0) return "OOPS";
    let first = 0, last = 1;
    for (let i = 1; i < num; i++) {
        let tmp = last;
        last = first + last;
        first = tmp;
    }
    return last;
};

// Do not edit below this line
module.exports = fibonacci;
