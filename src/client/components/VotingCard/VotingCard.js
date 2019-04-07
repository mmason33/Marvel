import React, { Component } from 'react'

import { Image } from '../Image/Image'
import { Button } from '../Button/Button'

export default class VotingCard extends Component {
    constructor() {
        super()
        this.state = {
            votes: 0,
        }
    }

    componentDidMount() {
        this.queryVotes();
    }

    queryVotes() {
        this.props.database.ref(`contests/${this.props.id}/characters/${this.props.identifier}/votes`).once('value').then((snapshot) => {
            console.log(snapshot.val())
            this.setState((state, props) => ({
                votes: snapshot.val() || 0
            }))
        });
    }

    onVoteButtonClick() {
        console.log('you voted!')
        this.setState({
            votes: this.state.votes += 1,
        })

        console.log(this.props.identifier)

        this.props.database.ref(`contests/${this.props.id}/characters/${this.props.identifier}`).update({votes: this.state.votes})
    }

    render() {
        return (
            <div className="voting-card">
                <h1>{this.props.characterName}</h1>
                <p>{this.props.characterDescription}</p>
                <Image imageSrc={this.props.characterThumbnail} imageClassName="voting-card-image" />
                <Button buttonClassName="voting-card-button" clickHandler={this.onVoteButtonClick.bind(this)} buttonText={this.state.votes}/>
            </div>
        )
    }
}