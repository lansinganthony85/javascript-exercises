const findTheOldest = function(array) {
    return array.reduce((acc, curr) => {
        const date = new Date();
        const prevDeath = (!("yearOfDeath" in acc)) ? date.getFullYear() : acc.yearOfDeath;
        const currDeath = (!("yearOfDeath" in curr)) ? date.getFullYear() : curr.yearOfDeath;
        const prevAge = prevDeath - acc.yearOfBirth;
        const currAge = currDeath - curr.yearOfBirth;

        if(prevAge > currAge)
            return acc;
        else
            return curr;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
