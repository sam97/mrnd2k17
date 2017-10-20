import React, { Component } from 'react';

import DateHeader from './DateHeader'
import Timeline from './Timeline'
import DayDetails from './DayDetails'
import Footer from './Footer'

class App extends Component {
	render() {
		return (
			<div>
				<DateHeader />
				<Timeline>

				</Timeline>
				<DayDetails>

				</DayDetails>
				<Footer>

				</Footer>
			</div>
		);
	}
}

export default App;
