import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import Main from './Router'
import Header from "./components/common/Header";

function Index() {
    return (
        <div>
            <CssBaseline />
            <Header />
            <BrowserRouter>
                <Route component={Main} />
            </BrowserRouter>
        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
