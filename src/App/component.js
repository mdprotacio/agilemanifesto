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
            Manifesto for Agile Software Development
          </h1>
        </header>
        <div className={styles.AppIntro}>
          <p>
            We are uncovering better ways of developing<br />
            software by doing it and helping others do it.<br />
            Through this work we have come to value:<br />
          </p>

          <p>
            Individuals and interactions over processes and tools<br />
            Working software over comprehensive documentation<br />
            Customer collaboration over contract negotiation<br />
            Responding to change over following a plan<br />
          </p>

          <p>
            That is, while there is value in the items on<br />
            the right, we value the items on the left more.<br />
          </p>
        </div>
        <div>
          &copy; 2001, the above authors<br />
          this declaration may be freely copied in any form, <br />
          but only in its entirety through this notice.
        </div>
      </div>
    );
  }
}
component.displayName = 'App';
