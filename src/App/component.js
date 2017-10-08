import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import styles from './styles.scss';

const About = () => <h1>About</h1>;
const Home = () => (
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
        <strong>Individuals and interactions</strong> over processes and tools<br />
        <strong>Working software</strong> over comprehensive documentation<br />
        <strong>Customer collaboration</strong> over contract negotiation<br />
        <strong>Responding to change</strong> over following a plan<br />
      </p>

      <p>
        That is, while there is value in the items on<br />
        the right, we value the items on the left more.<br />
      </p>
    </div>
    <div>
      <p>
        Kent Beck<br />
        Mike Beedle<br />
        Arie van Bennekum<br />
        Alistair Cockburn<br />
        Ward Cunningham<br />
        Martin Fowler<br />
        James Grenning<br />
        Jim Highsmith<br />
        Andrew Hunt<br />
        Ron Jeffries<br />
        Jon Kern<br />
        Brian Marick<br />
        Robert C. Martin<br />
        Steve Mellor<br />
        Ken Schwaber<br />
        Jeff Sutherland<br />
        Dave Thomas<br />
      </p>
    </div>
    <div>
      &copy; 2001, the above authors<br />
      this declaration may be freely copied in any form, <br />
      but only in its entirety through this notice.
    </div>
  </div>
);

export class component extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
component.displayName = 'App';
