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
			<div>{/* Modified with CSS to represent the node. */}</div>
		</span>
	);
}

class Timeline extends Component {
	// eslint-disable-next-line
	constructor(props) {
		super(props);

		this.pos = 0;
		this.isDown = false;
	}

	onTimelineMouseDown(e) {
		this.pos = e.screenX;
		this.isDown = true;
	}

	onMouseMove(e) {
		if(!this.isDown) return true;

		let timeline = document.querySelector('.timeline');
		timeline.scrollTo(timeline.scrollLeft - e.nativeEvent.movementX, 0);
		this.pos = e.screenX;
	}

	onMouseUp(e) {
		this.isDown = false;
		this.pos = 0;
	}

	render() {
		var isDate = this.props.currentDate instanceof Date;
		var DateString = isDate ? this.props.currentDate.toString() : null;

		return (
			<div
				className="timeline"
				onMouseDown={e => this.onTimelineMouseDown(e)}
				onMouseMove={e => this.onMouseMove(e)}
				onMouseUp={e => this.onMouseUp(e)}
			>
				{this.props.timeline.map((dayData, index) => {
					return (
						<TimeNode
							key={index} // To shut the debugger up.
							isActive={isDate && dayData.date.toString() === DateString}
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
