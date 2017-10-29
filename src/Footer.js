import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<a onClick={this.props.onOverviewClick}>Overview</a>
				<a>About</a>
				<a>Credits</a>
				<a className="github">
					View on
				</a>
			</div>
		)
	}
}

export default Footer;
