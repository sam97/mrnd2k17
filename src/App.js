import React, { Component } from 'react';

import DateHeader from './DateHeader'
import Timeline from './Timeline'
import DayDetails from './DayDetails'
import Footer from './Footer'

class App extends Component {
	constructor(props) {
		super(props);

		/* Supposed to be the data store.  */
		this.state = {
			presentDay: new Date()
		}
	}

	render() {
		return (
			// <div>
				[
					<DateHeader key={1} date={this.state.presentDay} />,
					(<Timeline key={2}>

					</Timeline>),
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
