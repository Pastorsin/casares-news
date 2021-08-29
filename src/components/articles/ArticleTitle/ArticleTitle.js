import './ArticleTitle.css'

import React, { Component } from 'react';

class ArticleTitle extends Component {
	render() {
		const { title, url } = this.props;

		return (
			<a href={url}>
				<h2 className="Article-title">
					{title}
				</h2>
			</a>
		);
	}
}

export default ArticleTitle;