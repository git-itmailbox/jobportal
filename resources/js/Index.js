import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Main from './Router'

function Index() {
    return (
        <BrowserRouter>
            <Route component={Main} />
        </BrowserRouter>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
