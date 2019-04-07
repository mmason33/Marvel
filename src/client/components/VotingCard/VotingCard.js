import React, { Component } from 'react'

import { Image } from '../Image/Image'
import Description from '../Description/Description'
import { Title } from '../Title/Title'
import Counter from '../Counter/Counter'

/**
 * @class VotingCard
 * @prop {object} database - The firebase db
 * @prop {string} id - The hash for the db ref
 * @prop {string} identifier - A unique string to reference db storage and store character votes
 * @prop {string} characterName - Given character name
 * @prop {string} characterDescription - Given character description
 * @prop {string} characterThumbnail - Given character thumbnail
 */
export default class VotingCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            votes: 0
        }

        this.updateClients()
    }

    componentDidMount() {
        // Check db for votes for a given character
        this.props.database.ref(`contests/${this.props.id}/characters/${this.props.identifier}/votes`).once('value').then((snapshot) => {
            this.setState((state, props) => ({
                votes: snapshot.val() || 0
            }))
        })
    }

    /**
     * @method updateClients - Update all users when there is a vote
     */
    updateClients() {
        this.props.database.ref(`contests/${this.props.id}/characters/${this.props.identifier}/votes`).on('value', (snapshot) => {
            this.setState((state, props) => ({
                votes: snapshot.val()
            }))
        })
    }

    /**
     * @method onVote - Handle when user votes
     */
    onVote() {
        // Use localStorage to prevent more than one vote
        if (this.checkLocalStorage() === this.props.id) {
            alert('Sorry but you already voted and your vote has been submitted')
            return false
        }

        // Proxy state to not mutate directly
        let votes = this.state.votes;
        this.setState({
            votes: votes += 1,
        }, this.sendVote)

        this.setLocalStorage()
    }

    /**
     * @method checkLocalStorage - Check localStorage for the vote object
     * @returns {object || null} - returns the getItem result
     */
    checkLocalStorage() {
        const storage = JSON.parse(window.localStorage.getItem('vote'))
        return storage ?
            storage.contest :
            null
    }

    /**
     * @method setLocalStorage - Set storage when user votes
     * @returns void
     */
    setLocalStorage() {
        // Object literal
        const storage = {
            contest: this.props.id,
            character: this.props.identifier
        }

        // Turn object literal to JSON string, set storage
        window.localStorage.setItem('vote', JSON.stringify(storage))
    }

    /**
     * @method sendVote - Send the vote update to firebase
     * @returns void
     */
    sendVote() {
        // Use props to correctly navigate db structure
        this.props.database.ref(`contests/${this.props.id}/characters/${this.props.identifier}`).update({votes: this.state.votes})
    }

    render() {
        return (
            <div className={`voting-card ${this.props.className}`}>
                <Title text={this.props.characterName} className="voting-card-title" />
                <div className="voting-card-image-wrapper">
                    <span className="vertical-helper"></span>
                    <Image imageSrc={this.props.characterThumbnail} className="voting-card-image" onClick={this.onVote.bind(this)} altText={this.props.characterName} />
                    <Counter className="voting-card-counter" count={this.state.votes} />
                </div>
                <Description text={this.props.characterDescription} className="voting-card-description"/>
            </div>
        )
    }
}