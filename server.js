const express = require('express');
const { createApolloFetch } = require('apollo-fetch');
const app = express();
const port = process.env.PORT || 5000;

const config = require('./src/server/config/config');
const randomizer = require('./src/server/utils/randomizer');
const queries = require('./src/server/config/queries');


app.get('/api/characters/:offset', (req, res) => {
    const fetch = createApolloFetch({
        uri: config.MARVEL_URI,
    });

    fetch({
        query: queries.getOffset(req.params.offset),
    }).then(results => {
        res.send(results.data);
    });
});

app.get('/api/characters/random/:numberOfRandomCharacters', (req, res) => {
    const fetch = createApolloFetch({
        uri: config.MARVEL_URI,
    });

    const randomOffsets = randomizer(config.NUMBER_OF_CHARACTERS, req.params.numberOfRandomCharacters);
    let queriesAggregate;

    randomOffsets.map((offset) => {
        queriesAggregate === undefined ?
            queriesAggregate = queries.getRandom(offset) :
            queriesAggregate += queries.getRandom(offset);
    });

    fetch({
        query: `
        {
            ${queriesAggregate},
        }`,
    }).then(results => {
        res.send(results.data);
    }).catch(error => {
        console.log(error);
    });
});


app.listen(port, () => console.log(`Listening on port ${port}`));