import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={ `${this.props.className || ''} counter`}>
                <span className="count">{this.props.count}</span>
            </div>
        )
    }
}