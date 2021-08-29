import './LoadingBar.css'

import React, { Component } from 'react';

class LoadingBar extends Component {
	render() {
		const { size } = this.props;

		return (
			<div className={`lds-dual-ring ${size}`}></div>
		);
	}
}

export default LoadingBar;