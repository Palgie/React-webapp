import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Tabs.scss';
import TabSwitch from './TabSwitch';
import TabContent from './TabContent';

class Tabs extends Component {
  constructor() {
    super();
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  state = {
    tabs: [
      { title: 'Ongoing', content: 'Ongoing', id: 0 },
      { title: 'Archived', content: 'Archived', id: 1 },
    ],
    active: 0,
  }

  handleTabClick(item) {
    console.log("Item recieved from TabSwitch: %s", item);
    this.setState({ active: item.id });
  }

  render() {

    console.log("State from Tab %o", this.state);

    return (
        <section>
          <TabSwitch items={this.state.tabs}
            active={this.state.active}
            onTabClick={this.handleTabClick}
          />

          <TabContent items={this.state.tabs}
            active={this.state.active}
          />
        </section>
    );
  }

}

export default withStyles(Tabs, s);
