import './NewsColumnSection.css';

import * as http from 'services/news.js'
import * as parser from 'helpers/news/parser.js'

import React, { Component } from 'react';

import Article from "components/articles/Article/Article"
import { Helmet } from "react-helmet";
import InfiniteScroll from 'react-infinite-scroller';
import LoadingBar from "components/snippets/LoadingBar/LoadingBar";
import NewsExporter from '../NewsExporter/NewsExporter';

class NewsColumnSection extends Component {

	constructor(props) {
		super(props);

		this.OFFSET = 10

		this.state = {
			schema: {
				"@graph": [],
				"@context": {}
			},
			hasMoreNews: true,
		}
	}

	async fetchNextSchema() {
		const { schema } = this.state;

		const articles = parser.getArticles(schema["@graph"]);

		const responseSchema = await http.getNews({
			start: articles.length,
			offset: this.OFFSET
		});

		const responseArticles = parser.getArticles(responseSchema["@graph"]);
		const mergedSchema = parser.merge(schema, responseSchema);

		this.setState({
			schema: mergedSchema,
			hasMoreNews: responseArticles.length > 0,
		});
	}

	render() {
		const { schema } = this.state;

		const graph = schema["@graph"];
		const articles = parser.getArticles(graph);

		const jsonld = JSON.stringify(schema);

		return (
			<InfiniteScroll
				loadMore={this.fetchNextSchema.bind(this)}
				hasMore={this.state.hasMoreNews}
				loader={<LoadingBar key={0} size="normal" />}>

				<NewsExporter articles={articles}> </NewsExporter>

				<Helmet>
					<script type="application/ld+json">{jsonld}</script>
				</Helmet>

				<section className="News-column-section">
					{articles.map((article) =>
						<Article
							key={article["@id"]}
							article={article}
							source={parser.sourceOf(article, schema)}
						/>)}
				</section>
			</InfiniteScroll>
		);
	}
}

export default NewsColumnSection;
