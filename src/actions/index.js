/*
Copyright (c) 2017 Keitaro AB

Use of this source code is governed by an MIT license
that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
*/

import axios from 'axios';
import { browserHistory } from 'react-router';

import { 
	AUTH_USER,
	AUTH_ERROR,
	UNAUTH_USER,
} from './types'

const ROOT_URL ='http://192.168.0.141:5000'

export function signupUser(values) {
	return dispatch => {
		axios.post(`${ROOT_URL}/`, values)
			.then(response => {
				dispatch({
					type: AUTH_USER,
					payload: response.data
				})
				localStorage.setItem('auth_token', response.data.token)				
				localStorage.setItem('user', JSON.stringify(response.data.user))				
				browserHistory.push('/?page=1')
			})
			.catch(error => {
				dispatch({
					type: AUTH_ERROR,
					payload: error.response.data
				})
			})
  }
}

export function signinUser({login, password}) {
	return dispatch => {
		axios.post(`${ROOT_URL}/user/login`, {login, password})
			.then(response => {
				axios.get(`${ROOT_URL}/api/3/action/user_show?id=${login}`)
					.then(response => {
						dispatch({
							type: AUTH_USER,
							payload: response.data.result
						})
						localStorage.setItem('auth_token', response.data.apikey)				
						localStorage.setItem('user', JSON.stringify(response.data.result))				
						browserHistory.push('/')
					})
					.catch(error => {
						dispatch({
							type: AUTH_ERROR,
							payload: {errors: ['Something went wrong!!!']}
						})
					})
			})
			.catch(error => {
				dispatch({
					type: AUTH_ERROR,
					payload: {errors: ['Invalid Username/Password!!!']}
				})
			})
	}
}

export function signoutUser() {
	return dispatch => {
		dispatch({type: UNAUTH_USER})
		localStorage.removeItem('auth_token')
		localStorage.removeItem('user')
		browserHistory.push('/')
	}
}