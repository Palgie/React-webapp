import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Popover.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(s);

class Popover extends Component {

  static propTypes = {
    size: PropTypes.string,
    padded: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.element,
    desc: PropTypes.string,
    heading: PropTypes.string,
    reverseHeadingOrder: PropTypes.bool,
  };

  static defaultProps = {
    size: false,
    padded: false,
  };

  render() {
    let title;
    let desc;
    let heading;
    let headingContent;
    let headingWrap;

    const className = cx({
      root: true,
      padded: this.props.padded,
      medium: this.props.size === 'medium' ? true : false,
      small: this.props.size === 'small' ? true : false,
      xsmall: this.props.size === 'xsmall' ? true : false,
    });

    if (this.props.title) {
      title = <p className={s.title}>{this.props.title}</p>;
      headingContent = title;
    }

    if (this.props.desc) {
      desc = <p className={s.description}>{this.props.desc}</p>;
      headingContent = desc;
    }

    if (this.props.heading) {
      heading = <h4 className={s.heading}>{this.props.heading}</h4>;
      headingContent = heading;
    }

    if (this.props.heading && this.props.desc) {
      const headingArray = [];

      if (!this.props.reverseHeadingOrder) {
        headingArray.push(heading);
        headingArray.push(desc);
      } else {
        headingArray.push(desc);
        headingArray.push(heading);
      }

      headingWrap = (
        <div className={s.title}>
          {headingArray}
        </div>
      );

      headingContent = headingWrap;
      desc = false;
    }

    return (
        <div className={className}>
          {headingContent}
          {this.props.children}
        </div>
    );
  }

}

export default withStyles(Popover, s);
