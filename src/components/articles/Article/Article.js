import './Article.css'

import React, { Component } from 'react';

import ArticleBody from '../ArticleBody/ArticleBody';
import ArticleFooter from '../ArticleFooter/ArticleFooter';
import ArticleHeader from '../ArticleHeader/ArticleHeader';

class Article extends Component {

	render() {
		const { article, source } = this.props;

		return (
			<article className="Article">
				<ArticleHeader article={article} />
				<ArticleBody article={article} />
				<ArticleFooter article={article} source={source} />
			</article>
		);
	}
}

export default Article;