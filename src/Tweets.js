import React, { Component } from 'react';
import './App.css';

class Tweets extends Component {
	render() {
		return (
			<section>
				<Tweet />
			</section>
		)
	}
}

function Tweet(props) {
	return (
		<div>
			<h4>Tweet Tweet</h4>
		</div>
	)
}

export default Tweets;
