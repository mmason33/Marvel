import React, { Component } from 'react'

import VotingCard from '../VotingCard/VotingCard'
import ShareUrl from '../ShareUrl/ShareUrl'
import { Title } from '../Title/Title'
import { Image } from '../Image/Image'

export default class VotingWall extends Component {

    componentDidUpdate() {
        if (!this.state) {
            this.setState((state, props) => ({
                id: this.props.id,
                url: window.location.origin + this.props.url,
                characters: this.props.characters,
            }))

            window.history.pushState(null,"", `${window.location.origin}/${this.props.id}`);
        }
    }

    render() {
        let cards;
        let title;
        let share;
        let image;
        const colors = ['blue', 'red', 'yellow']

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
                    className={colors[index]}
                    />
            })

            image = <Image imageSrc={'http://thetechnews.com/wp-content/uploads/2018/03/2_The-latest-Marvel-logo.jpg'} className="voting-wall-logo" altText="Logo" />
            title = <Title text="Character Voting" className="voting-wall-title" />
            share = <ShareUrl className="voting-share-url" inputClassName="voting-input" value={this.state.url} />

        }

        return (
            <div className="voting-wall">
                <div className="logo-wrapper">
                    {image}
                </div>
                {title}
                {share}
                {cards}
            </div>
        )
    }
}