import React, { Component } from 'react';
import './App.css';

class TimezoneSelector extends Component {
	constructor(props) {
		super()
		this.state = {
			currentValue: 0,
			timeContext: '',
			timeTraveling: false,
		}
		this.hours = [-12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			currentValue: event.target.value,
			timeTraveling: true,
			timeContext: this.getTimeContext(event.target.value)
		});
	}

	getTimeContext(number) {
		return number > 0 ? 'FUTURE' : 'PAST'
	}

  render() {
    return (
      <section className="App-intro">
				<div>Local time: {new Date().toLocaleTimeString()}.</div>
				{ this.state.timeTraveling ?
					<div>
						<p>Traveling to the {this.state.timeContext}.</p>
					</div>
					:
					<div>
						<p>I want to travel <TimeZone hours={this.hours} handleChange={this.handleChange} currentValue={this.state.currentValue}/> hours. OR <button>RANDOM</button></p>
					</div>
				}
      </section>
    );
  }
}

function TimeZone(props) {
	const hours = props.hours
	return (
		<select value={props.currentValue} onChange={props.handleChange}>
			{hours.map(hour =>
				<Hour key={hour.toString()} value={hour} />
			)}
		</select>
	)
}

function Hour(props) {
	return <option value={props.value}>{props.value}</option>
}

export default TimezoneSelector;
