import React, { Component } from 'react'

import { Image } from '../Image/Image'
import { Button } from '../Button/Button'
import Description from '../Description/Description'
import { Title } from '../Title/Title'
import Counter from '../Counter/Counter'
import { keyGen } from '../../utils/keygen'

export default class VotingCard extends Component {
    constructor() {
        super()
        this.state = {
            votes: 0,
        }
    }

    componentDidMount() {
        this.props.database.ref(`contests/${this.props.id}/characters/${this.props.identifier}/votes`).once('value').then((snapshot) => {
            this.setState((state, props) => ({
                votes: snapshot.val() || 0
            }))
        });
    }

    onVoteButtonClick() {
        if (this.checkLocalStorage()) {
            console.log('you already voted')
            return false
        }

        this.setState({
            votes: this.state.votes += 1,
        })

        this.setLocalStorage()
        this.sendVote();
    }

    checkLocalStorage() {
        return window.localStorage.getItem('vote');
    }

    setLocalStorage() {
        const storage = {
            user: keyGen(20),
            character: this.props.identifier
        }

        window.localStorage.setItem('vote', JSON.stringify(storage))
    }

    sendVote() {
        this.props.database.ref(`contests/${this.props.id}/characters/${this.props.identifier}`).update({votes: this.state.votes})
    }

    render() {
        return (
            <div className="voting-card">
                <Title text={this.props.characterName} className="voting-card-title" />
                <Description text={this.props.characterDescription} className="voting-card-description"/>
                <Image imageSrc={this.props.characterThumbnail} className="voting-card-image" onClick={this.onVoteButtonClick.bind(this)} />
                <Counter className="voting-card-counter" count={this.state.votes} />
                {/* <Button buttonClassName="voting-card-button" clickHandler={this.onVoteButtonClick.bind(this)} buttonText="Vote"/> */}
            </div>
        )
    }
}