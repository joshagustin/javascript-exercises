const findTheOldest = function(arr) {
    // sorts descending
    const oldestSorted = arr.sort((a, b) => {
        const currentYear = new Date().getFullYear();
        const aAge = getAge(a);
        const bAge = getAge(b)
        return aAge > bAge ? -1 : 1;
    });
    return oldestSorted[0];
};

function getAge(obj) {
    let finalYear = obj.yearOfDeath
    if (!finalYear) {
        finalYear = new Date().getFullYear();
    }
    return finalYear - obj.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
