import './NewsColumn.css';

import React, { Component } from 'react';

import NewsColumnHeader from '../NewsColumnHeader/NewsColumnHeader'
import NewsColumnSection from '../NewsColumnSection/NewsColumnSection'

class NewsColumn extends Component {
	render() {
		return (
			<div className="NewsColumn">
				<NewsColumnHeader />
				<NewsColumnSection />
			</div>
		);
	}
}

export default NewsColumn;
