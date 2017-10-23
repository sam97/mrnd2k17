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
				date: new Date(2017, 9, 1),
				desc: "somethin' happened on the 1st",
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
				personalNote: "personell stuff, m8, bugger off"
			}
		];
		
		this.state = {
			presentDay: timeline[0],
			headerDate: timeline[0].date,
			timeline: timeline
		}
	}

	onTimelineMouseOver(newDate) {
		this.setState({
			headerDate: newDate
		})
	}

	onTimelineMouseOut() {
		this.setState(prevState => {
			return {
				headerDate: prevState.presentDay.date
			}
		})
	}

	onTimelineClick(newDay) {
		this.setState({
			presentDay: newDay
		})
	}

	render() {
		return (
			// <div>
				[
					<DateHeader key={1} date={this.state.headerDate} />,
					<Timeline key={2}
					          timeline={this.state.timeline}
					          onMouseOver={newDate => this.onTimelineMouseOver(newDate)}
							  onMouseOut={() => this.onTimelineMouseOut()}
							  onClick={newDay => this.onTimelineClick(newDay)}
					 />,
					(<DayDetails key={3}>

					</DayDetails>),
					(<Footer key={4}>

					</Footer>)
				]
			// </div>
		);
	}
}

export default App;
