import React, { Component } from 'react';
import './Timeline.css'

function TimeNode(props) {
	return (
		<li>
			<span onMouseOver={props.onMouseOver}
				  onMouseOut={props.onMouseOut}
				  onClick={props.onClick}
			>
				X
			</span>
		</li>
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
				<ul>
					{this.props.timeline.map(day => {
						return (
							<TimeNode onMouseOver={() => this.props.onMouseOver(day.date)}
							          onMouseOut={this.props.onMouseOut}
							          onClick={() => this.props.onClick(day)}
							/>
						);
					})}
				</ul>
			</div>
		)
	}
}

export default Timeline;
