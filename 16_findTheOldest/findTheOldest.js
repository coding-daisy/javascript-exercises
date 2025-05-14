const findTheOldest = function(arrayOfPeopleObjects) {
    function getAgeOfPerson(person) {
        if (person.yearOfDeath) {
            return person.yearOfDeath - person.yearOfBirth;
        } else {
            return 2025 - person.yearOfBirth;
        }
    }
    let oldestAge = getAgeOfPerson(arrayOfPeopleObjects[0]);
    let oldestPerson = arrayOfPeopleObjects[0];

    for (let person of arrayOfPeopleObjects) {
        if (getAgeOfPerson(person) > oldestAge) {
            oldestAge = getAgeOfPerson(person);
            oldestPerson = person;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
