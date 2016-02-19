import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomePage.scss';
import Tabs from '../Tabs';

class HomePage extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Tabs tabItems={['Ongoing', 'Archived']}/>
        </div>
      </div>
    );
  }

}

export default withStyles(HomePage, s);
