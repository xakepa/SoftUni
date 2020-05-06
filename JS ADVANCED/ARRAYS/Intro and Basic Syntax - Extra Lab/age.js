function age(inputAge) {

    let person;

    if (inputAge <= 2) {
        person = 'baby';
    } else if (inputAge <= 13) {
        person = 'child';
    } else if (inputAge <= 19) {
        person = 'teenager';
    } else if (inputAge <= 65) {
        person = 'adult';
    } else if (inputAge >= 66) {
        person = 'elder';
    }
    console.log(person);
}
age(19);