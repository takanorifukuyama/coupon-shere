import React, { Component, Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';
import ButtonAppBar from './components/AppBar';
// import CouponList from './components/CouponList';
import MediaCard from './components/MediaCard';
import SimpleCard from './components/SimpleCard';
// import {  } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ButtonAppBar />
        <div style={{height:50}}></div>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} component={MediaCard} />
            <Route path={'/about'} component={SimpleCard} />
          </Switch>
        </BrowserRouter>
        {/* <CouponList /> */}
      </Fragment>
    );
  }
}

export default App;
