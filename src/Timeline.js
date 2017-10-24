import React, { Component } from 'react';
import './Timeline.css'

/* An <li> tag holding the representation of a time node.
 */
function TimeNode(props) {
	return (
		<span className={"timenode" + (props.isActive ? " active" : "")}
			onMouseOver={props.onMouseOver}
			onMouseOut={props.onMouseOut}
			onClick={props.onClick}
		>
			<div></div>
		</span>
	);
}

class Timeline extends Component {
	// eslint-disable-next-line
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="timeline">
				{this.props.timeline.map(day => {
					return (
						<TimeNode isActive={day.date.toString() === this.props.presentDay.date.toString()}
							onMouseOver={() => this.props.onMouseOver(day.date)}
							onMouseOut={this.props.onMouseOut}
							onClick={() => this.props.onClick(day)}
						/>
					);
				})}
			</div>
		)
	}
}

export default Timeline;
