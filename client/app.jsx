import React from 'react';
import Home from './pages/home';
import Navbar from './pages/navbar';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
      </>
    )
  }
}
