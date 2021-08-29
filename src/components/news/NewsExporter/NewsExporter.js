import './NewsExporter.css';

import * as http from 'services/news'

import React, { Component } from 'react';

import download from "js-file-download";
import formats from 'helpers/news/formats'

class NewsExporter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formatSelected: "json-ld",
            disabled: false
        }
    }

    async export() {
        const { articles } = this.props;
        const { formatSelected } = this.state;

        this.setState({ disabled: true });

        const format = formats[formatSelected];

        const schema = await http.getNews({
            start: 0,
            offset: articles.length,
            contentType: format.contentType,
            textPlain: true
        });

        const filename = `news.${format.extension}`
        download(schema, filename);

        this.setState({ disabled: false });
    }

    handleChange(event) {
        this.setState({ formatSelected: event.target.value });
    }

    render() {
        const { disabled, formatSelected } = this.state;
        const options = Object.keys(formats);

        return (
            <div className="NewsExporter">
                <select value={formatSelected}
                    onChange={this.handleChange.bind(this)}>

                    {options.map(option => (
                        <option key={option}
                            value={option}>
                            {option}
                        </option>
                    ))}
                </select>

                <button disabled={disabled}
                    onClick={this.export.bind(this)}>
                    Exportar
                </button>
            </div>
        );
    }
}

export default NewsExporter;
