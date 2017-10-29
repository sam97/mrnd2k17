import React, { Component } from 'react';
import './DateHeader.css';

class DateHeader extends Component {
	render() {
		var prettyString = "";
		// Months of a year to generate date string.
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

		if(typeof this.props.date === "string")
			prettyString = <span>{this.props.date}<sup></sup></span>; // sup tag for aligning.
		else if(this.props.date instanceof Date) {
			// Print the date in the format "{date} of {month}, {year}.
			let date = this.props.date.getDate();
			let month = months[this.props.date.getMonth()];
			let year = this.props.date.getFullYear();
			let supTag; // What to put in the <sup> tag.
			if(date % 10 === 1)
				supTag = "st";
			else if(date % 10 === 2)
				supTag = "nd";
			else if(date % 10 === 3)
				supTag = "rd";
			else
				supTag = "th";
			
			// In a span tag because you need to return a single DOM element.
			prettyString = <span>{date}<sup>{supTag}</sup> of {month}, {year}</span>;
		}
		
		return (
			<header className="dateheader">
				{prettyString}
			</header>
		)
	}
}

export default DateHeader;
