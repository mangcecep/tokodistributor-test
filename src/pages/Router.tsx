import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Test from './Test';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={false} path="/test" component={Test} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;