import './App.css';

import React, { Component } from 'react';

import NewsColumn from "./components/news/NewsColumn/NewsColumn"
import NotificationBody from "./components/notifications/NotificationBody/NotificationBody"

class App extends Component {

	render() {
		const isNotificationSupport = "Notification" in window;

		return (
			<div className="App">
				{isNotificationSupport ? <NotificationBody /> : null}
				<NewsColumn />
			</div>
		);
	}
}

export default App;
