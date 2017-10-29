import React, { Component } from 'react';

import DateHeader from './DateHeader'
import Timeline from './Timeline'
import DayDetails from './DayDetails'
import Footer from './Footer'

import Overview from './Footer/Overview'
// import About from './About'
// import Credits from './Credits'

// Constants defining what to render.
const OVERVIEW = 0;
const ABOUT = 1;
const CREDITS = 2;
const HEADERS = [
	"Overview",
	"About",
	"Credits"
];
const ELEMENTS = [
	<Overview />,
	// <About />,
	// <Credits />
];

class App extends Component {
	constructor(props) {
		super(props);

		/* Supposed to be the data store.  */
		var timeline = [
			{
				// The date of that day.
				date: new Date(2017, 9, 1),
				// What happened on that day. (Better name?)
				desc: "somethin' happened on the 1st",
				// My personal opinions of that day. 'null' means I have nothing to say.
				personalNote: "personell stuff, m8, bugger off"
			},
			{
				date: new Date(2017, 9, 2),
				desc: "somethin' happened on the 2nd",
				personalNote: "personell stuff, m8, bugger off"
			},
			{
				date: new Date(2017, 9, 3),
				desc: "somethin' happened on the third",
				personalNote: "personell stuff, m8, bugger off"
			},
			{
				date: new Date(2017, 9, 4),
				desc: "somethin' happened on the fourth",
				personalNote: null
			}
		];
		
		this.state = {
			DetailsData: ELEMENTS[OVERVIEW], // Holds one of the constants or timeline[i]. Defines what to render.
			currentDayNum: 0, // Number of the current day. Starts from zero, 'cuz programming.
			headerData: HEADERS[OVERVIEW], // The date or string to show in the header.
			timeline: timeline // The actual data.
		}
	}

	/* Set the header on hover.
	 */
	onTimelineMouseOver(newDate) {
		this.setState({
			headerData: newDate
		});
	}

	/* Reset the header on mouseOut.
	 */
	onTimelineMouseOut() {
		this.setState(prevState => {
			// TODO: Use a better check.
			if(prevState.DetailsData.hasOwnProperty("date")) {
				return {
					headerData: prevState.DetailsData.date
				}
			}
			return {
				headerData: HEADERS[ELEMENTS.indexOf(prevState.DetailsData)]
			}
		});
	}

	/* Fix the header on click.
	 * TODO: Set DayDetails, too.
	 */
	onTimelineClick(newData, index) {
		this.setState({
			DetailsData: newData,
			currentDayNum: index,
			headerData: newData.date
		});
	}

	onFooterClick(selector) {
		this.setState({
			headerData: HEADERS[selector],
			DetailsData: ELEMENTS[selector]
		});
	}

	render() {
		return (
			// <div>
			[
				<DateHeader key={1} date={this.state.headerData} />,
				<Timeline key={2}
					timeline={this.state.timeline}
					currentDate={this.state.DetailsData.date /* Which date to highlight. */} 
					onMouseOver={newDate => this.onTimelineMouseOver(newDate)}
					onMouseOut={() => this.onTimelineMouseOut()}
					onClick={(newData, index) => this.onTimelineClick(newData, index)}
				/>,
				<DayDetails key={3} details={this.state.DetailsData} day={this.state.currentDayNum} />,
				<Footer key={4}
					onOverviewClick={() => this.onFooterClick(OVERVIEW)}
					onAboutClick={() => this.onFooterClick(ABOUT)}
					onCreditsClick={() => this.onFooterClick(CREDITS)}
				/>
			]
			// </div>
		);
	}
}

export default App;
