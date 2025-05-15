const findTheOldest = function(people) {
    return people.map ((person) => {
        const age = person.yearOfDeath
        ? person.yearOfDeath - person.yearOfBirth
        : new Date().getFullYear() - person.yearOfBirth;
        return {...person, age: age};
    }).reduce ((oldest, person) => {
        if (oldest.age < person.age) {
            return person;
        }
        return oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
