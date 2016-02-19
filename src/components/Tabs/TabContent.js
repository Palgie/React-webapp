import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Tabs.scss';

class TabContent extends Component {

  render() {
    return (
        <div className={s.root}>

        </div>
    );
  }

}

export default withStyles(TabContent, s);
