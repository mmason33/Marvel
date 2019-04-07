import React, { Component } from 'react'

import VotingCard from '../VotingCard/VotingCard'

export default class VotingWall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
        }
        this.cards = [
            'https://cdn.herosports.com/upload/post/manual/04_19/5/2019-NFL-Win-Totals-1554478506.jpeg',
            'https://images.actionnetwork.com/800x450/blog/2019/04/NFL-Win-Totals-Betting-Odds-Picks.jpg',
            'https://sportshub.cbsistatic.com/i/r/2019/01/21/53597f1c-a005-45f4-bd01-72b5e46c4f57/thumbnail/770x433/71b2ffbab85722640e8cc9e0c7c4bc41/roger-goodell-nfl-rulebooks-saints-rams-pass-interference.jpg',
        ]

        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>VotingWall</h1>
                { this.cards.map((card, index) =>  <VotingCard cardData={card} key={index} />) }
            </div>
        )
    }
}