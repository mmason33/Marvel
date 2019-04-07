import React, { Component } from 'react'

import { Image } from '../Image/Image'
import { Button } from '../Button/Button'
import Description from '../Description/Description'
import { Title } from '../Title/Title'
import Counter from '../Counter/Counter'

export default class VotingCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            votes: 0,
        }
    }

    componentDidMount() {
        this.props.database.ref(`contests/${this.props.id}/characters/${this.props.identifier}/votes`).on('value', (snapshot) => {
            this.setState((state, props) => ({
                votes: snapshot.val() || 0
            }))
        });
    }

    onVoteButtonClick() {
        if (this.checkLocalStorage() === this.props.id) {
            console.log('you already voted')
            return false
        }

        this.setState({
            votes: this.state.votes += 1,
        })

        this.setLocalStorage()
        this.sendVote()
    }

    checkLocalStorage(contenstId) {
        const storage = JSON.parse(window.localStorage.getItem('vote'))
        return storage ?
            storage.contest :
            null
    }

    setLocalStorage() {
        const storage = {
            contest: this.props.id,
            character: this.props.identifier
        }

        window.localStorage.setItem('vote', JSON.stringify(storage))
    }

    sendVote() {
        this.props.database.ref(`contests/${this.props.id}/characters/${this.props.identifier}`).update({votes: this.state.votes})
    }

    render() {
        return (
            <div className={`voting-card ${this.props.className}`}>
                <Title text={this.props.characterName} className="voting-card-title" />
                <div className="voting-card-image-wrapper">
                    <span className="vertical-helper"></span>
                    <Image imageSrc={this.props.characterThumbnail} className="voting-card-image" onClick={this.onVoteButtonClick.bind(this)} altText={this.props.characterName} />
                    <Counter className="voting-card-counter" count={this.state.votes} />
                </div>
                <Description text={this.props.characterDescription} className="voting-card-description"/>
                {/* <Button buttonClassName="voting-card-button" clickHandler={this.onVoteButtonClick.bind(this)} buttonText="Vote"/> */}
            </div>
        )
    }
}