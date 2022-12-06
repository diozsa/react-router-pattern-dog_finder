import React from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import Dogs from "./Dogs";
import DogDetail from "./DogDetail";

const Routes = ({ dogs }) => (
    <Switch>
                                //lists all dogs
        <Route exact path="/dogs">
            <Dogs dogs={dogs} />
        </Route>
                                //lists individual dog
        <Route path="/dogs/:name">
            <DogDetail dogs={dogs} />
        </Route>

        <Redirect to="/dogs" />
    </Switch>
);
export default Routes;