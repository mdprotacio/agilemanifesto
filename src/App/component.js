import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import styles from './styles.scss';

const Principles = () => (
  <div>
    <h1>Principles behind the Agile Manifesto</h1>

    <p>We follow these principles:</p>

    <p>
      Our highest priority is to satisfy the customer through early and
      continuous delivery of valuable software.
    </p>

    <p>
      Welcome changing requirements, even late in development. Agile processes
      harness change for the customer&apos;s competitive advantage.
    </p>

    <p>
      Deliver working software frequently, from a couple of weeks to a couple of
      months, with a preference to the shorter timescale.
    </p>

    <p>
      Business people and developers must work together daily throughout the
      project.
    </p>

    <p>
      Build projects around motivated individuals. Give them the environment and
      support they need, and trust them to get the job done.
    </p>

    <p>
      The most efficient and effective method of conveying information to and
      within a development team is face-to-face conversation.
    </p>

    <p>Working software is the primary measure of progress.</p>

    <p>
      Agile processes promote sustainable development. The sponsors, developers,
      and users should be able to maintain a constant pace indefinitely.
    </p>

    <p>
      Continuous attention to technical excellence and good design enhances
      agility.
    </p>

    <p>
      Simplicity--the art of maximizing the amount of work not done--is
      essential.
    </p>

    <p>
      The best architectures, requirements, and designs emerge from
      self-organizing teams.
    </p>

    <p>
      At regular intervals, the team reflects on how to become more effective,
      then tunes and adjusts its behavior accordingly.
    </p>
  </div>
);
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
              <Link to="/principles">Principles</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/principles" component={Principles} />
        </div>
      </Router>
    );
  }
}
component.displayName = 'App';
