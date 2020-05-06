class Forum {
    #users
    #questions
    #id
    constructor() {
        this.#users = [];
        this.#questions = [];
        this.#id = 1;
    }

    register(username, password, repeatPassword, email) {
        if (!username || !password || !repeatPassword || !email) {
            throw new Error('Input can not be empty');
        } else if (password !== repeatPassword) {
            throw new Error('Passwords do not match');
        }

        const findUser = this.users.find(s => s.username === username);

        if (!findUser) {
            this.users.push({
                username,
                password,
                repeatPassword,
                email,
                logged: false
            })

            return `${username} with ${email} was registered successfully!`
        } else {
            throw new Error('This user already exists!')
        }
    }
}

const user = new Forum();
console.log(user.register('Michael', '123', '123', 'michael@abv.bg'));
console.log(user.login('Michael', '123'));
console.log(user.logout('Michael', '123'));
console.log(user.postQuestion('Michael', "Do I need glasses for skiing?"));
