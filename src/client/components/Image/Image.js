import React, { Component } from 'react'

export class Image extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <img src={ this.props.imageSrc } className={ `${this.props.className || ''} image` } onClick={this.props.onClick} alt={this.props.altText} />
        )
    }
}