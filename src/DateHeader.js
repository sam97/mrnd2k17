import React, { Component } from 'react';
import './DateHeader.css';

class DateHeader extends Component {
	constructor(props) {
		super(props);

		var months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		]

		props.date.__proto__.toPrettyString = function() {
			var date = this.getDate();
			var month = months[this.getMonth()];
			var year = this.getFullYear();
			var supTag;
			if(date % 10 === 1)
				supTag = "st";
			else if(date % 10 === 2)
				supTag = "nd";
			else if(date % 10 === 3)
				supTag = "rd";
			else
				supTag = "th";
			
			return (
				<span>{date}<sup>{supTag}</sup> of {month}, {year}</span>
			);
		}

		props.date.toPrettyString.bind(props.date);
	}

	render() {
		return (
			<header className="dateheader">
				{this.props.date.toPrettyString()}
			</header>
		)
	}
}

export default DateHeader;
