import React, { Component, Fragment } from 'react';

import './App.css';
import ButtonAppBar from './components/AppBar';
// import CouponList from './components/CouponList';
import MediaCard from './components/MediaCard';

class App extends Component {
  render() {
    return (
      <Fragment>
        <ButtonAppBar />
        <MediaCard />
        {/* <CouponList /> */}
      </Fragment>
    );
  }
}

export default App;
