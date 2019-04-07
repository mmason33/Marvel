import React, { Component } from 'react'

import VotingCard from '../VotingCard/VotingCard'
import ShareUrl from '../ShareUrl/ShareUrl'
import { Title } from '../Title/Title'

export default class VotingWall extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        if (!this.state) {
            this.setState((state, props) => ({
                id: this.props.id,
                url: window.location.origin + this.props.url,
                connections: this.props.connections,
                characters: this.props.characters,
            }))

            window.history.pushState(null,"", `${window.location.origin}/${this.props.id}`);
        }
    }

    render() {
        let cards;
        let title;
        let share;

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

            title = <Title text="Marvel Character Voting" className="voting-wall-title" />
            share = <ShareUrl className="voting-share-url" inputClassName="voting-input" value={this.state.url} />

        }

        return (
            <div className="voting-wall">
                {title}
                {share}
                {cards}
            </div>
        )
    }
}