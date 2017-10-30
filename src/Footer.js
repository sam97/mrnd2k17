import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<a onClick={this.props.onOverviewClick}>Overview</a>
				<a onClick={this.props.onAboutClick}>About</a>
				<a onClick={this.props.onCreditsClick}>Credits</a>
				<a className="github">
					View on
				</a>
			</div>
		)
	}
}

export default Footer;
