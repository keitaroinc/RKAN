import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HistoryApi from './helper/historyApi';
import reduxStore from './reduxStore';
import { Provider } from 'react-redux';

import IndexPage from './pages/indexPage';

export default class Root extends Component {

    history = HistoryApi.getInstance();

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
