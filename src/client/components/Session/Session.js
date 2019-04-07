import React, { Component } from 'react';

import VotingWall from '../VotingWall/VotingWall'
import { keyGen } from '../../utils/js/keygen';
import { database } from '../Firebase/Firebase.js'
import Container from '../Container/Container'
import { fetchAsync } from '../../utils/js/fetchAsync'

export default class Session extends Component {
    constructor() {
        super()
        this.state = {}
        this.url = window.location.pathname
    }

    componentDidMount() {
        (this.url === '/') ?
            this.createContest() :
            this.retrieveContest()
    }

    createContest() {
        const key = keyGen(10);
        console.log('new key', key)

        fetchAsync('http://localhost:5000/api/characters/random/3')
            .then(result => {
                this.setState((state) => ({
                    id: key,
                    url: `/${key}`,
                    characters: result
                }))

                database.ref(`contests/${key}`).set({
                    id: key,
                    url: `/${key}`,
                    characters: result
                })
            })
            .catch(reason => console.log(reason.message))
    }

    retrieveContest() {
        database.ref(`contests/${this.url.replace('/', '')}`).once('value').then((snapshot) => {
            if (snapshot.exists()) {
                this.setState((state, props) => ({
                    id: snapshot.val().id,
                    url: snapshot.val().url,
                    characters: snapshot.val().characters
                }))
            } else {
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