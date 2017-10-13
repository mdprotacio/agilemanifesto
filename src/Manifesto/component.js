import React, { Component } from 'react';

// import logo from './logo.svg';
import styles from './styles.scss';
// <img width="100" src={logo} alt="logo" />

export class component extends Component {
  render() {
    return (
      <article
        className={styles.manifesto}
        style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}
      >
        <header>
          <h1>Manifesto for Agile Software Development</h1>
        </header>
        <section>
          <p>
            We are uncovering better ways of developing<br />
            software by doing it and helping others do it.<br />
            Through this work we have come to value:<br />
          </p>

          <ul>
            <li>
              <strong>Individuals and interactions</strong> over processes and
              tools
            </li>
            <li>
              <strong>Working software</strong> over comprehensive documentation<br />
            </li>
            <li>
              <strong>Customer collaboration</strong> over contract negotiation<br />
            </li>
            <li>
              <strong>Responding to change</strong> over following a plan<br />
            </li>
          </ul>

          <p>
            That is, while there is value in the items on<br />
            the right, we value the items on the left more.<br />
          </p>
        </section>
        <section className="authors">
          <ul>
            <li>Kent Beck</li>
            <li>Mike Beedle</li>
            <li>Arie van Bennekum</li>
            <li>Alistair Cockburn</li>
            <li>Ward Cunningham</li>
            <li>Martin Fowler</li>
            <li>James Grenning</li>
            <li>Jim Highsmith</li>
            <li>Andrew Hunt</li>
            <li>Ron Jeffries</li>
            <li>Jon Kern</li>
            <li>Brian Marick</li>
            <li>Robert C. Martin</li>
            <li>Steve Mellor</li>
            <li>Ken Schwaber</li>
            <li>Jeff Sutherland</li>
            <li>Dave Thomas</li>
          </ul>
        </section>
        <small>
          &copy; 2001, the above authors<br />
          this declaration may be freely copied in any form, <br />
          but only in its entirety through this notice.
        </small>
      </article>
    );
  }
}
component.displayName = 'Manifesto';
