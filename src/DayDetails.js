import React, { Component } from 'react';
import './DayDetails.css'

class DayDetails extends Component {
	render() {
		if(this.props.details.hasOwnProperty("date")) {
			return (
				<div className="daydetails">
					<h1>Day {this.props.day}</h1>
					<p>{this.props.details.date.toLocaleDateString("en-IN")}</p>
					<hr />
					<p>{this.props.details.desc}</p>
					<p>{this.props.details.personalNote}</p>
				</div>
			)
		}

		return (
			<div className="daydetails">
				{this.props.details}
			</div>
		)
	}
}

export default DayDetails;
