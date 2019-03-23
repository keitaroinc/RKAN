import createBrowserHistory from 'history/createBrowserHistory';
import ReduxUtil from './reduxUtil';

export default class History {
    
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
History.getInstance = function() {
    if (instance === null) {
        instance = new History();
    }
    return instance;
}
