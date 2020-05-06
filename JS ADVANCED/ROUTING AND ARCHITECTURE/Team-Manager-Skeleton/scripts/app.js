import { get, post, put, del } from './requester.js';

(() => {

    const partials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
        loginForm: './templates/login/loginForm.hbs',
        registerForm: './templates/register/registerForm.hbs',
        team: './templates/catalog/team.hbs',
        createForm: './templates/create/createForm.hbs',
        teamControls: './templates/catalog/teamControls.hbs',
        teamMember: './templates/catalog/teamMember.hbs',
        editForm: './templates/edit/editForm.hbs',
    }

    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/', loadHome)
        this.get('#/home', loadHome)

        this.get('#/about', function (ctx) {
            getSessionInfo(ctx);

            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/about/about.hbs');
                })
        })

        this.get('#/login', function (ctx) {
            getSessionInfo(ctx)

            this.loadPartials(partials).then(function () {
                this.partial('./templates/login/loginPage.hbs');
            })
        })

        this.post('#/login', function (ctx) {
            const { username, password } = ctx.params;

            post('user', 'login', { username, password }, 'Basic')
                .then(userInfo => {
                    sessionStorage.setItem('userId', userInfo._id);
                    sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
                    sessionStorage.setItem('username', userInfo.username);

                    ctx.redirect('#/')
                }).catch(console.error)
        })

        this.get('#/register', function (ctx) {

            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/register/registerPage.hbs')
                })
        })

        this.post('#/register', function (ctx) {
            const { username, password, repeatPassword } = ctx.params;

            if (password === repeatPassword) {
                post('user', '', { username, password }, 'Basic')
                    .then(data => {
                        ctx.redirect('#/login')
                    })
                    .catch(console.error)
            } else {
                alert('Passwords doesn\'t match')
            }
        })

        this.get('#/logout', function (ctx) {
            sessionStorage.clear();
            ctx.redirect('#/');
        });

        this.get('#/catalog', function (ctx) {
            getSessionInfo(ctx);

            get('appdata', 'teams', 'Kinvey')
                .then(data => {
                    ctx.teams = data;

                    this.loadPartials(partials)
                        .then(function () {
                            this.partial('./templates/catalog/teamCatalog.hbs')
                        })
                }).catch(console.error)
        })

        this.get('#/catalog/:id', function (ctx) {
            getSessionInfo(ctx);
            const id = ctx.params.id;

            get('appdata', `teams/${id}`, 'Kinvey')
                .then(teamInfo => {
                    ctx.name = teamInfo.name;
                    ctx.description = teamInfo.description;
                    this.loadPartials(partials)
                        .then(function () {
                            this.partial('./templates/catalog/details.hbs')
                        })
                }).catch(console.error)
        })

        this.get('#/create', function (ctx) {

            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/create/createPage.hbs');
                }).catch(console.error)
        })

        this.post('#/create', function (ctx) {
            const { name, description } = ctx.params;
            const members = [];
            members.push(sessionStorage.getItem('userId'));

            post('appdata', 'teams', { name, description, members }, 'Kinvey')
                .then(data => {
                    ctx.redirect('#/catalog');
                }).catch(console.error)
        })


        this.get('#/edit/', function (ctx) {
            getSessionInfo(ctx);

            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/edit/editPage.hbs');
                })
        })

        this.post('#/join', function (ctx) {
            getSessionInfo(ctx);

            alert('Joined successfuly!')
        })

        function loadHome(ctx) {
            getSessionInfo(ctx);

            this.loadPartials(partials)
                .then(function () {
                    this.partial('./templates/home/home.hbs');
                });
        }

        function getSessionInfo(ctx) {
            ctx.userId = sessionStorage.getItem('userId');
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
        }
    });

    app.run()
})()