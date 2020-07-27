import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import HomePage from './pages/home-page/index';
import RegisterPage from './pages/register-page/index';
import ShareThoughtsPage from './pages/share-thoughts';
import LoginPage from './pages/login-page';
import Profile from './pages/profile';
import ErrorPage from './pages/error-page';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/register' component={RegisterPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/share' component={ShareThoughtsPage} />
                <Route path='/profile/:userid' component={Profile} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;