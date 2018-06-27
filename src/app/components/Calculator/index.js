
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component, Fragment } from 'react';
import Keypad from 'components/Calculator/Keypad';
import Operator from 'components/Calculator/Operator';
import { Helmet } from 'react-helmet';


/**
 * -----------------------------------------------------------------------------
 * React Component: Calculator
 * -----------------------------------------------------------------------------
 */

export default class Calculator extends Component {
    constructor(props) {
        super(props);

        this.inputs = {};
        this.target = null;

        // bindings
        this.calculate        = this.calculate.bind(this);
        this.onInputKeyPress  = this.onInputKeyPress.bind(this);
        this.onInputFocus     = this.onInputFocus.bind(this);
        this.onKeyPadClick    = this.onKeyPadClick.bind(this);
        this.onOperatorChange = this.onOperatorChange.bind(this);

        this.state = { ...this.props };
    }

    componentWillReceiveProps(nextProps) {
        // transpose props to state
        this.setState(prevState => ({
            ...prevState,
            ...nextProps,
        }));
    }

    calculate() {
        let { left, right, operator, total } = this.inputs;

        if (!left.value) { left.focus(); return; }
        if (!right.value) { right.focus(); return; }

        let equation = `${left.value} ${operator.value} ${right.value}`;

        this.setState({ total: eval(equation) });

        total.focus();
    }

    onInputKeyPress(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.calculate();
        }
    }

    onInputFocus(e) {
        this.target = e.currentTarget;
    }

    onKeyPadClick(e, key) {
        let { left, right, total } = this.inputs;
        let { target = null } = this;

        target = (!target) ? left : target;

        switch (key) {
            case 'backspace':
                let val = target.value.split('');
                if (val.length > 0) { val.pop(); }
                target.value = val.join('');
                break;

            case 'clear':
                left.value  = '';
                right.value = '';
                total.value = '';
                left.focus();
                this.setState({total: ''});
                break;

            case 'toggle':
                let { operator, operators } = this.state;
                operator = (operator === operators[0]) ? operators[1] : operators[0];
                this.setState({ operator });
                break;

            default:
                target.value = target.value + key;
        }
    }

    onOperatorChange(e, operator) {
        this.setState({ operator, total: '' });
    }

    render() {
        let { total = '', operator, operators, title } = this.state;
        return (
            <Fragment>
                <Helmet titleTemplate="Calculator">
                    <title>{title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="Startups.co Code Challenge"/>
                    <meta property="og:title" content={title} />
                    <meta property="og:type" content="article" />
                    <html lang="en" />
                    <body className="test-component" />
                </Helmet>
                <div className={'calculator'}>
                    <div className={'box'}>
                        <div className={'group flex stretch'}>
                            <input
                                type={'number'}
                                onFocus={this.onInputFocus}
                                onKeyUp={this.onInputKeyPress}
                                ref={(elm) => { this.inputs['left'] = elm; this.target = elm }} />
                            <Operator
                                value={operator}
                                operators={operators}
                                title={'click to change operator'}
                                onChange={this.onOperatorChange}
                                ref={(elm) => { this.inputs['operator'] = elm; }} />
                            <input
                                type={'number'}
                                onFocus={this.onInputFocus}
                                onKeyUp={this.onInputKeyPress}
                                ref={(elm) => { this.inputs['right'] = elm; }} />
                            <button
                                type={'button'}
                                onClick={this.calculate}
                                title={'Calculate'}>=</button>
                            <input
                                type={'text'}
                                value={total}
                                readOnly={true}
                                className={'grow number'}
                                onKeyUp={this.onInputKeyPress}
                                ref={(elm) => { this.inputs['total'] = elm; }} />
                        </div>
                    </div>

                    <div className={'box'}>
                        <Keypad onKeyClick={this.onKeyPadClick} operators={operators} />
                    </div>

                    <div className={'box'}>
                        <button className={'primary block'} onClick={this.calculate}>Calculate</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

Calculator.defaultProps = {
    total     : '',
    operator  : '+',
    operators : ['+', '-'],
    title     : 'Calculator',
};
