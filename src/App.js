import React, { Component, Fragment } from 'react';

import './App.css';
import ButtonAppBar from './components/AppBar';
import CouponList from './components/CouponList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ButtonAppBar />
        <CouponList />
      </Fragment>
    );
  }
}

export default App;
