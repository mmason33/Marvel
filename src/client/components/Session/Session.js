import React, { Component } from 'react';

import VotingWall from '../VotingWall/VotingWall'
import { keyGen } from '../../utils/js/keygen';
import { database } from '../Firebase/Firebase.js'
import Container from '../Container/Container'
import { fetchAsync } from '../../utils/js/fetchAsync'

/**
 * @class Session
 * @props void
 */
export default class Session extends Component {
    constructor() {
        super()
        this.state = {}
        this.url = window.location.pathname
    }

    componentDidMount() {
        // Check url and either retrieve or create a contest
        (this.url === '/') ?
            this.createContest() :
            this.retrieveContest()
    }

    /**
     * @method createContest - Create a new contest and update the db and component state
     * @returns void
     */
    createContest() {
        // Generate unique hash
        const key = keyGen(10);

        // Reference express server explicitly
        // Package.json proxies were not working :/
        fetchAsync('http://localhost:5000/api/characters/random/3')
            .then(result => {
                // Set state with the GraphQL response
                this.setState((state) => ({
                    id: key,
                    url: `/${key}`,
                    characters: result
                }))

                // Update firebase with the GraphQL response
                database.ref(`contests/${key}`).set({
                    id: key,
                    url: `/${key}`,
                    characters: result
                })
            })
            .catch(reason => console.log(reason.message))
    }

    /**
     * @method retrieveContest - Find a contest that exists
     * @returns void
     */
    retrieveContest() {
        // Check db for hash present in the url
        database.ref(`contests/${this.url.replace('/', '')}`).once('value').then((snapshot) => {
            if (snapshot.exists()) {
                // If db returns a result update the state accordingly
                this.setState((state, props) => ({
                    id: snapshot.val().id,
                    url: snapshot.val().url,
                    characters: snapshot.val().characters
                }))
            } else {
                // Url hash is invalid, create new contest
                this.createContest()
            }
        });
    }

    render() {
        return (
            <Container rootClass="container">
                <VotingWall id={this.state.id} url={this.state.url} characters={this.state.characters} database={database}/>
            </Container>
        )
    }
}