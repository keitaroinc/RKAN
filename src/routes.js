import React from 'react'
import { Route, IndexRoute } from 'react-router'

// import components
import App from './components/app' 
import Ckan from './components/ckan/ckan'
import Signup from './components/authentication/signup'
import Signin from './components/authentication/signin'
import Signout from './components/authentication/signout'
import NotFound from './components/not_found'
import Authentication from './components/authentication/require_authentication'

export default (
	<Route path='/' component={App}>
		<IndexRoute component={Ckan} />
		<Route path='signup' component={Signup} />
		<Route path='signin' component={Signin} />
		<Route path='signout' component={Signout} />
		<Route path='*' component={NotFound} />
	</Route>
)