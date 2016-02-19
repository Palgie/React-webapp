import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames/bind';
import s from './Button.scss';

const cx = classNames.bind(s);

class Button extends Component {

  static propTypes = {
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    warning: PropTypes.string,
    transparent: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    length: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    warning: false,
    primary: true,
    className: 'btn',
    type: 'button',
    size: false,
    length: false,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    buttonState: '',
  }

  handleClick() {
    this.setState({ buttonState: 'loading' });
    // make asynchronous call
    setTimeout(() =>
      this.setState({ buttonState: 'success' })
    , 1000);
  }

  render() {
    const text = this.state.buttonState === 'loading' ? 'Processing...' : this.props.value;

    const className = cx({
      root: true,
      inProgress: this.state.buttonstate === 'loading' ? true : false,
      error: this.state.buttonstate === 'error' ? true : false,
      warning: this.props.warning,
      transparent: this.props.transparent,
      small: this.props.size === 'small' ? true : false,
      short: this.props.length === 'short' ? true : false,
    });

    return (
      <button
        className={className}
        onClick={this.handleClick}
        state={this.state.buttonState}
        type={this.props.type}
      >
        {text}
      </button>
    );
  }

}

export default withStyles(Button, s);
