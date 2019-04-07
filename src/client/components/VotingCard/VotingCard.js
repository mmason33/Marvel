import React, { Component } from 'react'

import { Image } from '../Image/Image'
import { Button } from '../Button/Button'
import { FirebaseContext } from '../Firebase/Firebase.js'

export default class VotingCard extends Component {
    constructor() {
        super()
        this.state = {
            votes: 0,
        }
    }

    onVoteButtonClick() {
        console.log('you voted!')
        this.setState({
            votes: this.state.votes += 1,
        })
    }

    render() {
        return (
            <div className="voting-card">
                <FirebaseContext.Consumer>
                    {firebase => {

                    }}
                </FirebaseContext.Consumer>
                <h1>VotingCard</h1>
                <Image imageSrc={this.props.cardData} imageClassName="voting-card-image" />
                <Button buttonClassName="voting-card-button" clickHandler={this.onVoteButtonClick.bind(this)} buttonText={this.state.votes}/>
            </div>
        )
    }
}