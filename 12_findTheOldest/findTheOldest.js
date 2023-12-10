const findTheOldest = function(peopleArr) {
    // Check for person objects with no yearOfDeath
    // Assign current year as interim value
    peopleArr.forEach((person) => {
        person.hasOwnProperty('yearOfDeath') ? null : person['yearOfDeath'] = new Date().getFullYear();
    })
    console.log(peopleArr);
    
    // Use .map() to generate an agesArr
    let agesArr = peopleArr.map((person) => person['yearOfDeath'] - person['yearOfBirth']);

    // Use for loop to find highestAge in ageArr
    let highestAge = 0;
    let numberOfPeople = peopleArr.length;
    for (let i = 0; i < numberOfPeople; i++) {
        if (agesArr[i] > highestAge) {
            highestAge = agesArr[i];
        }
    }
    // Use .findIndex(highestAge) 
    let indexOfOldestPerson = agesArr.indexOf(highestAge);
    // return peopleArr[index]
    return peopleArr[indexOfOldestPerson];
};

// Do not edit below this line
module.exports = findTheOldest;
