import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PopoverContent.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(s);

class PopoverContent extends Component {

  static propTypes = {
    children: PropTypes.element,
    desc: PropTypes.string,
  };

  render() {
    let popoverContent;
    const className = cx({
      root: true,
    });

    if (this.props.desc) {
      popoverContent = <p className={s.description}>{this.props.desc}</p>;
    }

    return (
        <div className={className}>
          {popoverContent}
          {this.props.children}
        </div>
    );
  }

}

export default withStyles(PopoverContent, s);
