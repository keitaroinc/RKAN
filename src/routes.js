import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import History from './helper/history';
import reduxStore from './reduxStore';
import { Provider } from 'react-redux';

import IndexPage from './pages/indexPage';

export default class Root extends Component {

    history = History.getInstance();

    render() {
        const store = reduxStore();
        return (
            <Provider store={store}>
                <Router history={this.history.api}>
                    <Switch>
                        <Route exact path="/" component={IndexPage} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
};
