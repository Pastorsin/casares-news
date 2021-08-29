import './ArticleHeader.css'

import React, { Component } from 'react';

import ArticleTitle from '../ArticleTitle/ArticleTitle'

class ArticleHeader extends Component {
	render() {
		const { article } = this.props;

		return (
			<header className="Article-header">
				<ArticleTitle
					url={article["schema:url"]}
					title={article["schema:headline"]} />
			</header>
		);
	}
}

export default ArticleHeader;