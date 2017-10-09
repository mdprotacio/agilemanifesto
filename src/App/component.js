import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Manifesto } from '../Manifesto';
import { Principles } from '../Principles';

export class component extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Manifesto</Link>
            </li>
            <li>
              <Link to="/principles">Principles</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Manifesto} />
          <Route path="/principles" component={Principles} />
        </div>
      </Router>
    );
  }
}
component.displayName = 'App';
