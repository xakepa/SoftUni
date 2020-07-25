import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import HomePage from './pages/home-page/index';
import Register from './pages/register-page/index';
import ShareThoughtsPage from './pages/share-thoughts';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/register' component={Register} />
                <Route path='/share' component={ShareThoughtsPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;