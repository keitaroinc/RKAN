/*
Copyright (c) 2017 Keitaro AB

Use of this source code is governed by an MIT license
that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
	class Authentication extends Component {	
		render() {
			if (this.props.authenticated) {
				return(
					<ComposedComponent {...this.props}/>
				)
			} else {
				return(
					<div className='container alert alert-danger m-t-3'>
						<p>Мора да бидете најавени за да ја извршите оваа акција!</p>
					</div>
				)
			}
		}
	}

	function mapStateToProps(state) {
    return { authenticated: state.auth.authenticate }
  }

	return connect(mapStateToProps)(Authentication)
} 



