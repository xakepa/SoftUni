function personInfo(firstName, lastName, age) {
    const person = {
        firstName,
        lastName,
        age
    }

    function personInfo(firstName, lastName, age) {
        const person = {
            firstName,
            lastName,
            age
        }
        Object.entries(person).forEach((x) => console.log(x.join(': ')));
    }
    //ver 2
    // for (const key in person) {
    //     if (person.hasOwnProperty(key)) {
    //         const element = person[key];
    //         console.log(key + ':', element);
    //     }
    // }

    //ver 3
    // const entries = Object.entries(person);
    // for (let [key, value] of entries) {
    //     console.log(`${key}: ${value}`);
    // }
}
personInfo('Peter', 'Pan', 20)