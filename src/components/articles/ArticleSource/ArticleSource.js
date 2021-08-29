import './ArticleSource.css'

import React, { Component } from 'react';

class ArticleSource extends Component {
	render() {
		const { source } = this.props;

		return (
			<a href={source["schema:url"]}>
				<span className="Article-author">
					{source["schema:name"]}
				</span>
			</a>
		);
	}
}

export default ArticleSource;