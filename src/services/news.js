import api from 'services/index'
import formats from 'helpers/news/formats'

const DEFAULT_CONTENT_TYPE = formats["json-ld"].contentType

export async function getNews({ start, offset, contentType, textPlain }) {
    const response = await api.get("articles/", {
        params: { start, offset },
        headers: {
            'Content-Type': contentType || DEFAULT_CONTENT_TYPE
        },
        data: {}
    });

    const { data } = response;

    if (textPlain && isJson(response)) {
        return JSON.stringify(data);
    }

    return data;
}

function isJson(response) {
    const contentType = response.headers["content-type"];
    return contentType.includes("json");
}