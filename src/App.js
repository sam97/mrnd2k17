import React, { Component } from 'react';

import DateHeader from './DateHeader'
import Timeline from './Timeline'
import DayDetails from './DayDetails'
import Footer from './Footer'

import timeline from './datastore'
import Overview from './Footer/Overview'
import About from './Footer/About'
import Credits from './Footer/Credits'

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
	<About />,
	<Credits />
];

class App extends Component {
	constructor(props) {
		super(props);
		
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
		window.scrollTo(0, 0); // Add animation.
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
