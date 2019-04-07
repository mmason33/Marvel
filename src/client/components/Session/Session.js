import React, { Component } from 'react';

import VotingWall from '../VotingWall/VotingWall'
import { keyGen } from '../../utils/keygen';
import { FirebaseContext } from '../Firebase/Firebase.js'
import Container from '../Container/Container'
import Url from '../../utils/url'

export default class Session extends Component {
    constructor() {
        super()
        this.state = {
            url: window.location.pathname,
        }
    }

    render() {
        return (
            <Container rootClass="container">
                <FirebaseContext.Consumer>
                    {firebase => {

                    }}
                </FirebaseContext.Consumer>
                <VotingWall id={this.state.id} url={this.state.url} connections={this.state.connections} />
            </Container>
        )
    }
}