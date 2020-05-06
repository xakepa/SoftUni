import { get, post, put, del } from './requester.js';

function getPartials() {
    return {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs',
    }
}

const app = Sammy('#rooter', function () {
    this.use('Handlebars', 'hbs');

    this.get('/', function (ctx) {
        setHeaderInfo(ctx);

        if (ctx.isAuth) {
            get('appdata', 'recipes', 'Kinvey')
                .then(recipes => {
                    ctx.recipes = recipes;

                    this.loadPartials(getPartials())
                        .partial('./templates/home.hbs');
                })
        } else {
            this.loadPartials(getPartials())
                .partial('./templates/home.hbs');
        }
    });


    this.get('/login', function (ctx) {
        setHeaderInfo(ctx);

        this.loadPartials(getPartials())
            .partial('./templates/auth/login.hbs');
    });

    this.post('/login', function (ctx) {
        const { username, password } = ctx.params;

        if (username && password) {
            post('user', 'login', { username, password }, 'Basic')
                .then(userInfo => {
                    saveAuthInfo(userInfo);
                    ctx.redirect('/');
                })
                .catch(console.error);
        }
    })

    this.get('/register', function () {

        this.loadPartials(getPartials())
            .partial('./templates/auth/register.hbs');
    })

    this.post('/register', function (ctx) {
        const { firstName, lastName, username, password, repeatPassword } = ctx.params;

        if (firstName && lastName && username && password === repeatPassword) {
            post('user', '', { firstName, lastName, username, password }, 'Basic')
                .then(userInfo => {
                    saveAuthInfo(userInfo);
                    ctx.redirect('/');
                })
                .catch(console.error);
        } else {
            alert('Passwords doesn\'t match')
        }
    })

    this.get('/logout', function (ctx) {

        post('user', '_logout', {}, 'Kinvey')
            .then(() => {
                sessionStorage.clear();
                ctx.redirect('/');
            })
    })

    this.get('/share', function (ctx) {
        setHeaderInfo(ctx);
        this.loadPartials(getPartials())
            .partial('./templates/recipes/shareRecipe.hbs')
    });

    this.post('/share', function (ctx) {
        setHeaderInfo(ctx);

        const { meal, ingredients, prepMethod, description, foodImageURL, category } = ctx.params;
        const categories = {
            'Vegetables and legumes/beans': 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg',
            'Grain Food': 'https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg',
            'Fruits': 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg',
            'Milk, chees, eggs and alternatives': 'https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg',
            'Lean meats and poultry, fish and alternatives': 'https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg'
        }
        if (meal && ingredients && prepMethod && description && foodImageURL && category) {
            post('appdata', 'recipes',
                {
                    meal,
                    ingredients: ingredients.split(' '),
                    prepMethod, description, foodImageURL,
                    category,
                    likesCounter: 0,
                    categoryImageURL: categories[category]
                }, 'Kinvey').then(() => {
                    ctx.redirect('/')
                        .catch(console.error);
                })
        }
    });

    this.get('/recipe/:id', function (ctx) {
        setHeaderInfo(ctx);
        const id = ctx.params.id;

        get('appdata', `recipes/${id}`, 'Kinvey')
            .then(data => {
                data.isCreator = sessionStorage.getItem('userId') === data._acl.creator;
                ctx.recipe = data;

                this.loadPartials(getPartials())
                    .partial('../templates/recipes/recipe-details.hbs')
            }).catch(console.error)
    });

    this.get('/like/:id', function (ctx) {
        setHeaderInfo(ctx);
        const id = ctx.params.id;

        get('appdata', `recipes/${id}`, 'Kinvey')
            .then(data => {
                ctx.recipe = data;

                this.loadPartials(getPartials())
                    .partial('../templates/recipes/recipe-details.hbs')
            }).catch(console.error)
    });

    this.post('/like/:id', function (ctx) {
        setHeaderInfo(ctx);
        const id = ctx.params.id;
        console.log(ctx.params);
        console.log(ctx);
        let { meal, ingredients, prepMethod, description, foodImageURL, likesCounter, category } = ctx.params;
        likesCounter++;
        const categories = {
            'Vegetables and legumes/beans': 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg',
            'Grain Food': 'https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg',
            'Fruits': 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg',
            'Milk, chees, eggs and alternatives': 'https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg',
            'Lean meats and poultry, fish and alternatives': 'https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg'
        }

        put('appdata', `recipes/${id}`,
            {
                meal,
                ingredients: ingredients.split(' '),
                prepMethod, description, foodImageURL,
                category,
                likesCounter,
                categoryImageURL: categories[category]
            }, 'Kinvey')
            .then(() => console.log())
            .catch(console.error);
    })



    this.get('/edit/:id', function (ctx) {
        setHeaderInfo(ctx);
        const id = ctx.params.id;

        get('appdata', `recipes/${id}`, 'Kinvey')
            .then(recipe => {
                ctx.recipe = recipe;

                this.loadPartials(getPartials())
                    .partial('../templates/recipes/editForm.hbs')
            })
    })

    this.post('/edit/:id', function (ctx) {
        setHeaderInfo(ctx);
        const id = ctx.params.id;

        let { meal, ingredients, prepMethod, description, foodImageURL, likesCounter, category } = ctx.params;
        const categories = {
            'Vegetables and legumes/beans': 'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg',
            'Grain Food': 'https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg',
            'Fruits': 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg',
            'Milk, chees, eggs and alternatives': 'https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg',
            'Lean meats and poultry, fish and alternatives': 'https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg'
        }

        put('appdata', `recipes/${id}`,
            {
                meal,
                ingredients: ingredients.split(' '),
                prepMethod, description, foodImageURL,
                category,
                likesCounter,
                categoryImageURL: categories[category]
            }, 'Kinvey').then(() => {
                ctx.redirect('/')
                    .catch(console.error);
            })
    })

    this.get('/archive/:id', function (ctx) {
        setHeaderInfo(ctx);
        const id = ctx.params.id;
        del('appdata', `recipes/${id}`, 'Kinvey')
            .then(() => {
                ctx.redirect('/');
            })
    })

    function setHeaderInfo(ctx) {
        ctx.isAuth = sessionStorage.getItem('authtoken') !== null;
        ctx.fullName = sessionStorage.getItem('fullName');
    }

    function saveAuthInfo(userInfo) {
        sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
        sessionStorage.setItem('fullName', `${userInfo.firstName} ${userInfo.lastName}`);
        sessionStorage.setItem('userId', userInfo._id);
    }
})
app.run()