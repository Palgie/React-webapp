import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Avatar from '../Avatar';

class Header extends Component {

  render() {
    return (
      <header className={s.root}>
        <div className={s.container}>
          <Link className={s.brand} to="/">
            <img className={s.logo} src={require('./logo.svg')} alt="Roadmap" />
            <span className={s.brandText}>Roadmap</span>
          </Link>
          <div className={s.profile}>
            <Avatar imagePath="https://pbs.twimg.com/profile_images/615570003564331008/Zd3FvRUc.jpg" />
          </div>
        </div>
      </header>
    );
  }

}

export default withStyles(Header, s);
