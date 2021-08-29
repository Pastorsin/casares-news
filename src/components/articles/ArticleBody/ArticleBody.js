import './ArticleBody.css'

import React, { Component } from 'react';

import ArticleDescription from "../ArticleDescription/ArticleDescription"
import ArticleImage from "../ArticleImage/ArticleImage"

class ArticleBody extends Component {
	render() {
		const { article } = this.props;

		return (
			<div className="Article-body">
				<ArticleImage
					src={article["schema:thumbnailUrl"]}
					alt={article["schema:headline"]} />

				<ArticleDescription description={article["schema:text"]} />
			</div>
		);
	}
}

export default ArticleBody;