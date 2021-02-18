import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

let { path, url } = useRouteMatch();
const Main = props => (
    <Switch>
        {/*User might LogIn*/}
        <Route exact path={path} component={Home}/>
        {/*User will LogIn*/}
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/employer'>

        </Route>
        {/* User is LoggedIn*/}
        {/*<PrivateRoute path='/dashboard' component={Dashboard}/>*/}
        {/*Page Not Found*/}
        <Route component={NotFound}/>
    </Switch>
);
export default Main;
