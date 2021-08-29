# "Casares News" UI
App that shows the lastest news of the city of Carlos Casares and allows export them in RDF formats (`JSON-LD`, `turtle`, `n3`, etc.)

- Backend: https://github.com/Pastorsin/casares-news-api

## Usage
Visit: https://pastorsin.github.io/casares-news/

## Local execution
### Requirements
- [nodejs](https://nodejs.org/en/download/)

### Install

1. Install dependencies
```bash
npm install
```

2. *Optional:* Generate the application server key for webpush notifications ([guide](https://github.com/Pastorsin/casares-news-api#install)) and put it in the .env file

```bash
REACT_APP_PUBLIC_VAPID_KEY=<enter_application_server_key>
```

### Run

Run the server

```bash
npm start server
```
