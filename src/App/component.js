import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, NavDrawer, Panel, AppBar } from 'react-toolbox';
// import RTLink from 'react-toolbox/lib/Link';

import { Manifesto } from '../Manifesto';
import { Principles } from '../Principles';

export class component extends Component {
  state = {
    drawerActive: false,
    drawerPinned: false,
    sidebarPinned: false
  };

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  toggleDrawerPinned = () => {
    this.setState({ drawerPinned: !this.state.drawerPinned });
  };

  toggleSidebar = () => {
    this.setState({ sidebarPinned: !this.state.sidebarPinned });
  };

  render() {
    return (
      <Router>
        <Layout>
          <NavDrawer
            active={this.state.drawerActive}
            pinned={this.state.drawerPinned}
            permanentAt="xxxl"
            onOverlayClick={this.toggleDrawerActive}
          >
            <p>
              <Link to="/">Manifesto</Link>
            </p>
            <p>
              <Link to="/principles">Principles</Link>
            </p>
          </NavDrawer>
          <Panel>
            <AppBar leftIcon="menu" onLeftIconClick={this.toggleDrawerActive} />
            <Route exact path="/" component={Manifesto} />
            <Route path="/principles" component={Principles} />
          </Panel>
        </Layout>
      </Router>
    );
  }
}
component.displayName = 'App';
