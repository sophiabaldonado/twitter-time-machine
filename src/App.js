import React, { Component } from 'react';
import TimezoneSelector from './TimezoneSelector.js';
import Tweets from './Tweets.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Twitter Time Machine</h1>
					<TimezoneSelector />
        </header>
				<article className="main">
        	<Tweets />
				</article>
      </div>
    );
  }
}

export default App;
