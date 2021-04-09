/*
Copyright (c) 2017 Keitaro AB

Use of this source code is governed by an MIT license
that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'

class Signout extends Component {
	componentWillMount() {
		this.props.signoutUser()
	}

	render() {
		return null
	}

}	

export default connect(null, actions)(Signout)