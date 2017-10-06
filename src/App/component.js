import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './styles.scss';

export class component extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>
            Welcome to the Agile Manifesto (in React)
          </h1>
        </header>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App/component.js</code> and save to
          reload.
        </p>
      </div>
    );
  }
}
component.displayName = 'App';
