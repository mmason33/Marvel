import React, { Component } from 'react';

import VotingWall from '../VotingWall/VotingWall'
import { keyGen } from '../../utils/keygen';
import { database } from '../Firebase/Firebase.js'
import Container from '../Container/Container'
import Url from '../../utils/url'
import { fetchAsync } from '../../utils/fetchAsync'

export default class Session extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        this.resolveUrl()
    }

    resolveUrl() {
        const url = window.location.pathname
        if (url === '/') {
            const key = keyGen(10);
            console.log('new key', key)
            database.ref(`contests/${key}`).set({
                id: key,
                url: `/${key}`,
                connections: 0
            })

            fetchAsync('http://localhost:5000/api/characters/random/3')
                .then(result => {
                    this.setState((state) => ({
                        id: key,
                        url: `/${key}`,
                        connections: 0,
                        characters: result
                    }))

                    database.ref(`contests/${key}`).set({
                        id: key,
                        url: `/${key}`,
                        connections: 0,
                        characters: result
                    })
                })
                .catch(reason => console.log(reason.message))
        } else {
            database.ref(`contests/${url.replace('/', '')}`).once('value').then((snapshot) => {
                if (snapshot.exists()) {
                    this.setState((state, props) => ({
                        id: snapshot.val().id,
                        url: snapshot.val().url,
                        connections: snapshot.val().connections,
                        characters: snapshot.val().characters
                    }))
                }
            });
        }
    }

    render() {
        return (
            <VotingWall id={this.state.id} url={this.state.url} connections={this.state.connections} characters={this.state.characters} database={database}/>
        )
    }
}