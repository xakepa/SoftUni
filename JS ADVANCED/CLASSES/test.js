class Student {
    _email

    constructor(fName, sName, email) {
        this.fName = fName;
        this.lName = sName;
        this.email = email;
    }
    get email() {
        return this._email
    }

    set email(value) {
        if (typeof value !== 'string') {
            throw new TypeError('first name must be a string');
        }
        this._email = value;
    }
}
const myself = new Student('Plamen', 'Ivanov', 'plamen.hhh@gmail.com');
console.log(myself.email);