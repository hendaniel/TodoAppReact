import React from "react";
import Done from './Pages/Done';
import Todo from './Pages/Todo';
import Doing from './Pages/Doing';
import { Switch, Route } from "react-router-dom";
import App from "./App.js";

const Router = () => {
    return (
        <App>
            <Switch>
                <Route exact path="/" component={Todo} />
                <Route path="/todo" component={Todo} />
                <Route path="/doing" component={Doing} />
                <Route path="/done" render={Done} />
            </Switch>
        </App>
    );
}

export default Router;