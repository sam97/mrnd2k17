import React, { Component } from 'react';
import './DateHeader.css';

class DateHeader extends Component {
	constructor(props) {
		super(props);

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

		/* A function to print the date in the format "{date} of {month}, {year}."
		 * Add it to the object's prototype to make it a method.
		 * (Why? Because I can.)
		 */
		props.date.__proto__.toPrettyString = function() {
			var date = this.getDate();
			var month = months[this.getMonth()];
			var year = this.getFullYear();
			var supTag; // What to put in the <sup> tag.
			if(date % 10 === 1)
				supTag = "st";
			else if(date % 10 === 2)
				supTag = "nd";
			else if(date % 10 === 3)
				supTag = "rd";
			else
				supTag = "th";
			
			// In a span tag because you need to return a single DOM element.
			return (
				<span>{date}<sup>{supTag}</sup> of {month}, {year}</span>
			);
		}

		props.date.toPrettyString.bind(props.date); // To make use of 'this' in the method.
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
