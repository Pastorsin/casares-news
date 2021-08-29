export function getArticles(graph) {
    return graph.filter(element => element["@type"] === "schema:NewsArticle");
}

export function merge(oldSchema, newSchema) {
    const oldGraph = oldSchema["@graph"]
    const newGraph = newSchema["@graph"]

    newSchema["@graph"] = [
        ...mergeArticles(oldGraph, newGraph),
        ...mergeNewspapers(oldGraph, newGraph)
    ]

    return Object.assign(oldSchema, newSchema)
}

function mergeArticles(oldGraph, newGraph) {
    const newArticles = getArticles(newGraph)
        .sort((a, b) => datePublised(b) - datePublised(a));

    const oldArticles = getArticles(oldGraph);

    return [...oldArticles, ...newArticles]
}

function datePublised(article) {
    return new Date(article["schema:datePublished"]);
}

function mergeNewspapers(oldGraph, newGraph) {
    const oldNewspapers = getNewspapers(oldGraph);
    const oldNewspapersId = oldNewspapers.map(newspaper => newspaper["@id"]);

    const newNewspapers = getNewspapers(newGraph)
        .filter((newspaper) => !oldNewspapersId.includes(newspaper["@id"]));

    return [...oldNewspapers, ...newNewspapers]
}

function getNewspapers(graph) {
    return graph.filter(element => element["@type"] === "schema:NewsMediaOrganization");
}

export function sourceOf(article, schema) {
    const newspapers = getNewspapers(schema["@graph"]);

    return newspapers.filter(newspaper => isSourceOf(article, newspaper))[0]
}

function isSourceOf(article, newspaper) {
    return newspaper["@id"] === article["schema:creator"]["@id"];
}