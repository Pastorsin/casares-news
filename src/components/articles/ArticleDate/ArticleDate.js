import './ArticleDate.css'

import React, { Component } from 'react';

class ArticleDate extends Component {

	render() {
		const { date: dateString } = this.props;

		const date = new Date(dateString);
		const dateFormated = date.toLocaleDateString(
			"es-ES", {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})

		return (
			<time>{dateFormated}</time>
		);
	}
}

export default ArticleDate;
