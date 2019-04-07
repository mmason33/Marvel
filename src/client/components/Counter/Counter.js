import React, { Component } from 'react'

/**
 * @class Counter
 * @prop {string} className - Additional css class
 * @prop {int} count - The current value of the counter
 */
export default class Counter extends Component {
    render() {
        return (
            <div className={ `${this.props.className || ''} counter`}>
                <span className="count">{this.props.count}</span>
            </div>
        )
    }
}