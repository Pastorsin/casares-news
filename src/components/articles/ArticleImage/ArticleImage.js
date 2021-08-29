import './ArticleImage.css'

import React, { Component } from 'react';

class ArticleImage extends Component {
	render() {
		const { alt } = this.props;

		const emptyImage = 'img/empty-img.png';
		const src = this.props.src ? this.props.src : emptyImage;

		return (
			<div className="Article-image">
				<img src={src} alt={alt} />
			</div>
		);
	}
}

export default ArticleImage;