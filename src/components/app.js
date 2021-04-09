/*
Copyright (c) 2017 Keitaro AB

Use of this source code is governed by an MIT license
that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
*/

import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { style: { minHeight: '' } }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({ style: { minHeight: window.innerHeight - 110 } })
  }

  componentWillMount() {
    this.updateDimensions()
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  render() {
    return (
  		<div>
	    	<Header location={this.props.location}/>
        <div className="middleContent" style={this.state.style}>
	    	 {this.props.children}
        </div>
        <Footer />
	    </div>
    );
  }
}

