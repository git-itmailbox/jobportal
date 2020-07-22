import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Home from './components/Admin/Home';
import Login from './components/Admin/LoginComponent';
import Register from './components/Admin/RegisterComponent';
import NotFound from './components/common/NotFound'
// User is LoggedIn
// import PrivateRoute from './PrivateRoute'
// import Dashboard from './views/user/Dashboard/Dashboard';
const Main = props => (
    <Switch>
        {/*User might LogIn*/}
        <Route exact path='/' component={Home}/>
        {/*User will LogIn*/}
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        {/* User is LoggedIn*/}
        {/*<PrivateRoute path='/dashboard' component={Dashboard}/>*/}
        {/*Page Not Found*/}
        <Route component={NotFound}/>
    </Switch>
);
export default Main;
