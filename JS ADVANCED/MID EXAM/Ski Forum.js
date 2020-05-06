class Forum {
    #users
    #questions
    #id

    constructor() {
        this.#users = [];
        this.#questions = [];
        this.#id = 1;
    }

    get users() {
        return this.#users;
    }

    get questions() {
        return this.#questions;
    }

    get id() {
        return this.#id
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

    login(username, password) {
        const findUser = this.users.find(s => s.username === username);
        const findPassword = this.users.find(s => s.password === password);

        if (!findUser) {
            throw new Error('There is no such user');
        } else if (findUser.username === username && findPassword.password === password) {
            this.users.logged = true;
            return 'Hello! You have logged in successfully';
        }
    }

    logout(username, password) {
        const findUser = this.users.find(s => s.username === username);
        const findPassword = this.users.find(s => s.password === password);

        if (!findUser) {
            throw new Error('There is no such user');
        }

        if (findUser.username === username && findPassword.password === password) {
            this.users.logged = true;
            return 'Hello! You have logged out successfully';
        }
    }

    postQuestion(username, question) {

        const findUser = this.users.find(s => s.username === username);
        if (!this.users.logged || !findUser) {
            throw new Error('You should be logged in to post questions')
        }

        if (question === '') {
            throw new Error('Invalid question')
        }

        this.questions.push(question)

        return "Your question has been posted successfully";
    }
}
const user = new Forum();
console.log(user.register('Michael', '123', '123', 'michael@abv.bg'));
console.log(user.login('Michael', '123'));
console.log(user.logout('Michael', '123'));
console.log(user.postQuestion('Michael', "Do I need glasses for skiing?"));
