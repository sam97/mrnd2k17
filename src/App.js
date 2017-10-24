import React, { Component } from 'react';

import DateHeader from './DateHeader'
import Timeline from './Timeline'
import DayDetails from './DayDetails'
import Footer from './Footer'

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
			currentDayData: timeline[0], // This day's events are shown in DayDetails.
			headerDate: timeline[0].date, // The day to show in the header.
			timeline: timeline // The actual data.
		}
	}

	/* Set the header date on hover.
	 */
	onTimelineMouseOver(newDate) {
		this.setState({
			headerDate: newDate
		});
	}

	/* Reset the header date on mouseOut.
	 */
	onTimelineMouseOut() {
		this.setState(prevState => {
			return {
				headerDate: prevState.currentDayData.date
			}
		});
	}

	/* Fix the header date on click.
	 * TODO: Set DayDetails, too.
	 */
	onTimelineClick(newDay) {
		this.setState({
			currentDayData: newDay
		});
	}

	render() {
		return (
			// <div>
			[
				<DateHeader key={1} date={this.state.headerDate} />,
				<Timeline key={2}
					timeline={this.state.timeline}
					currentDate={this.state.currentDayData.date}
					onMouseOver={newDate => this.onTimelineMouseOver(newDate)}
					onMouseOut={() => this.onTimelineMouseOut()}
					onClick={newDay => this.onTimelineClick(newDay)}
				/>,
				<DayDetails key={3} details={this.state.currentDayData} />,
				<Footer key={4} />
			]
			// </div>
		);
	}
}

export default App;
