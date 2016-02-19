import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Avatar.scss';
import Link from '../Link';

class Avatar extends Component {

  static propTypes = {
    imagePath: PropTypes.string.isRequired,
    rounded: PropTypes.bool,
    to: PropTypes.string,
  };

  static defaultProps = {
    rounded: true,
    to: '/user/',
  };

  render() {
    return (
      <Link to={this.props.to} className={s.root}>
        <img className={s.image} src={this.props.imagePath} />
      </Link>
    );
  }

}

export default withStyles(Avatar, s);
