
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component, Fragment } from 'react';


/**
 * -----------------------------------------------------------------------------
 * React Component: Keypad
 * -----------------------------------------------------------------------------
 */

export default class Keypad extends Component {
    constructor(props) {
        super(props);

        this.buttons = [];
        this.onResize = this.onResize.bind(this);

        this.state = { ...this.props };
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
        this.onResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(prevState => ({
            ...prevState,
            ...nextProps,
        }));
    }

    onResize() {
        let { height = 'auto', mounted = false } = this.state;

        this.buttons.forEach((item) => {
            if (!item) { return; }

            let w = item.offsetWidth;

            if (height !== w) {
                height = w - (w/3);
                this.setState({ height });
            }
        });
    }

    render() {
        let { keys, onKeyClick, height, operators } = this.state;

        this.buttons = [];

        return (
            <div className={'keypad'}>
                <div className={'row middle center'}>
                    {keys.map((item, i) => {
                        let { label, value, alt } = item;

                        if (value === 'toggle') {
                            label = operators.join('|');
                        }

                        return (
                            <div className={'col-4 key'} key={`key-${i}`}>
                                <button
                                    type={'button'}
                                    style={{ height }}
                                    alt={alt}
                                    dangerouslySetInnerHTML={{__html: label}}
                                    ref={(elm) => { this.buttons.push(elm); }}
                                    onClick={(e) => { onKeyClick(e, value, this); }} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

Keypad.defaultProps = {
    onKeyClick: null,
    operators: ['+', '-'],
    keys: [
        {value: 1, label: 1, alt: 'number 1'},
        {value: 2, label: 2, alt: 'number 2'},
        {value: 3, label: 3, alt: 'number 3'},
        {value: 4, label: 4, alt: 'number 4'},
        {value: 5, label: 5, alt: 'number 5'},
        {value: 6, label: 6, alt: 'number 6'},
        {value: 7, label: 7, alt: 'number 7'},
        {value: 8, label: 8, alt: 'number 8'},
        {value: 9, label: 9, alt: 'number 9'},
        {value: 'backspace', label: '&larr;', alt: 'backspace'},
        {value: 0, label: 0, alt: 'number zero'},
        {value: 'clear', label: 'clear', alt: 'clear'},
        {value: 'toggle', label: '+|-', alt: 'change operator'},
    ]
};
