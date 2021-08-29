import './ArticleFooter.css'

import React, { Component } from 'react';

import ArticleDate from '../ArticleDate/ArticleDate'
import ArticleSource from '../ArticleSource/ArticleSource'

class ArticleFooter extends Component {
	render() {
		const { article, source } = this.props;
		const datePublished = article["schema:datePublished"];

		return (
			<footer className="Article-footer">
				<div className="Article-footer-text">
					<small>
						<ArticleDate date={datePublished} />
						<span> por </span>
						<ArticleSource source={source} />
					</small>
				</div>
			</footer>
		);
	}
}

export default ArticleFooter;