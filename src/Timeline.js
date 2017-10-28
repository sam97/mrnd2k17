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
		var currentDate = this.props.currentDate;

		return (
			<div className="timeline">
				{this.props.timeline.map((dayData, index) => {
					return (
						<TimeNode
							key={index} // To shut the debugger up.
							isActive={dayData.date.toString() === currentDate.toString()}
							onMouseOver={() => this.props.onMouseOver(dayData.date)}
							onMouseOut={this.props.onMouseOut}
							onClick={() => this.props.onClick(dayData, index)}
						/>
					);
				})}
			</div>
		)
	}
}

export default Timeline;
