import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Tabs.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(s);

class TabSwitch extends Component {

  static propTypes = {
    items: PropTypes.array,
    onTabClick: PropTypes.func,
    active: PropTypes.number,
  }

  constructor() {
    super();
    this.state = {
      active: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const index = e.currentTarget.getAttribute('data-key');
    this.props.onTabClick(index);
    this.setState({ active: index });

    console.log(this.props.active);
    console.log(this.state.active);
  }

  render() {
    const className = cx({
      tab: true,
      active: this.state.active === this.props.active,
    });

    console.log(this.props.active);
    console.log(this.state.active);

    return (
        <div className={s.root}>
          <ul className={s.tabs}>
            {this.props.items.map((tab) =>
              <li className={className}
                onClick={this.handleClick}
                key={tab.id}
                data-key={tab.id}
              >
                {tab.title}
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default withStyles(TabSwitch, s);
