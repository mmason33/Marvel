/*
   __  ___                  __
  /  |/  /__ ______  _____ / /
 / /|_/ / _ `/ __/ |/ / -_) /
/_/__/_/\_,_/_/  |___/\__/_/ __
  / _ \_______    (_)__ ____/ /_
 / ___/ __/ _ \  / / -_) __/ __/
/_/  /_/  \___/_/ /\__/\__/\__/
             |___/
*/

const express = require('express');
const { createApolloFetch } = require('apollo-fetch');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const config = require('./src/server/config/config');
const randomizer = require('./src/server/utils/randomizer');
const queries = require('./src/server/config/queries');

// Turn off CORS to allow React to hit the express sever
// Not a production app!
app.use(cors());
app.options('*', cors());

// Get n random characters based on the endpoint param
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