import React, { Component } from 'react'

export default class ShareUrl extends Component {
    constructor(props) {
        super(props)
    }

    onFocus() {
        const shareWrapper = document.querySelector('.share-url')
        const input = shareWrapper.querySelector('.input')
        input.select()
        document.execCommand('copy')
    }

    render() {
        return (
            <div className={ `${this.props.className || ''} share-url`}>
                <span className="message">Click to copy url to clipboard</span>
                <input className={ `${this.props.inputClassName || ''} input`} value={this.props.value} onFocus={this.onFocus} readOnly={true}/>
            </div>
        )
    }
}