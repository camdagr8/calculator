
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component, Fragment } from 'react';


/**
 * -----------------------------------------------------------------------------
 * React Component: Operator
 * -----------------------------------------------------------------------------
 */

export default class Operator extends Component {
    constructor(props) {
        super(props);

        this.value = null;
        this.toggle = this.toggle.bind(this);
        this.state = { ...this.props };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(prevState => ({
            ...prevState,
            ...nextProps,
        }));
    }

    toggle(e) {
        let { value, onChange, operators } = this.state;

        value = (value === operators[0]) ? operators[1] : operators[0];

        this.setState({ value });
        this.value = value;

        if (typeof onChange === 'function') {
            onChange(e, value);
        }
    }

    render() {
        let state = JSON.parse(JSON.stringify(this.state));
        let { value } = this.state;

        delete state.value;
        delete state.onClick;

        this.value = value;
        return (
            <button onClick={this.toggle} type={'button'} {...state}>{this.value}</button>
        );
    }
}

Operator.defaultProps = {
    value: '+',
    operators: ['+', '-'],
    onChange: null,
};
