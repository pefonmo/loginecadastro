import React from 'react';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        </div>

    );
}
export default Routes;
