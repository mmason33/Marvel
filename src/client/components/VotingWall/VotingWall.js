import React, { Component } from 'react'

import VotingCard from '../VotingCard/VotingCard'

export default class VotingWall extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        if (!this.state) {
            this.setState((state, props) => ({
                id: this.props.id,
                url: this.props.url,
                connections: this.props.connections,
                characters: this.props.characters,
            }))
        }
    }

    render() {
        let cards;
        console.log(this.state);
        if (this.state) {
            cards = Object.keys(this.state.characters).map((character, index) => {
            let data = this.state.characters[character][0]

            return <VotingCard
                    key={index}
                    identifier={character}
                    id={this.state.id}
                    characterName={data['name']}
                    characterDescription={data['description']}
                    characterThumbnail={data['thumbnail']}
                    characterResourceUri={data['resourceURI']}
                    database={this.props.database}
                    />
        })
        }

        return (
            <div>
                {cards}
            </div>
        )
    }
}