import reduxStore from "../reduxStore";
import { CHANGE_ROUTE } from '../actions/actionTypes';

class ReduxUtil {

    store = reduxStore();

    changeRoute(path) {
        this.store.dispatch({
            type: CHANGE_ROUTE,
            payload: { path }
        });
    }
}

let instance = null;
ReduxUtil.getInstance = () => {
    if (instance === null) {
        instance = new ReduxUtil();
    }
    return instance;
};

export default ReduxUtil;
