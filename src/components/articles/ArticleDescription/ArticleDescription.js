import './ArticleDescription.css'

import React, { Component } from 'react';

class ArticleDescription extends Component {
	render() {
		const { description } = this.props;

		return (
			<div className="Article-description">
				{(description) ? description : 'Sin descripción.'}
			</div>
		);
	}
}

export default ArticleDescription;