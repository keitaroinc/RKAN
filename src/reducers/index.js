/*
Copyright (c) 2017 Keitaro AB

Use of this source code is governed by an MIT license
that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
*/

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import auth from './auth_reducer.js'
import ads from './ads_reducer.js'
import items from './items_reducer.js'

const rootReducer = combineReducers({
	form: formReducer,
	auth,
	ads,
	items
});

export default rootReducer;

