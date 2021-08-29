import './NewsColumnHeader.css';

import React, { Component } from 'react';

import NewsColumnTitle from '../NewsColumnTitle/NewsColumnTitle'

class NewsColumnHeader extends Component {
	render() {
		return (
			<header className="News-column-header">
				<NewsColumnTitle />
			</header>
		);
	}
}

export default NewsColumnHeader;
