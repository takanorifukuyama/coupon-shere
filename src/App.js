import React, { Component, Fragment } from 'react';

import './App.css';
import Header from './components/Header';
import CouponList from './components/CouponList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <CouponList />
      </Fragment>
    );
  }
}

export default App;
