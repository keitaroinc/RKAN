import { createBrowserHistory } from 'history';
import ReduxUtil from './reduxUtil';

export default class HistoryApi {
    
    api = createBrowserHistory({
        basename: '',
        forceRefresh: false,
        keyLength: 6
    });

    reduxUtil = ReduxUtil.getInstance();

    forward(path) {
        this.api.push(path);
        this.reduxUtil.changeRoute(path);
    }
    
    back() {
        // TODO; implement redux helper for changing route
        this.api.goBack();
    }
}

var instance = null;
HistoryApi.getInstance = function() {
    if (instance === null) {
        instance = new HistoryApi();
    }
    return instance;
}
