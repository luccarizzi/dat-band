import React from 'react';
// import Home from './pages/home';
import Navbar from './pages/navbar';
import SearchForm from './pages/search-form';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <SearchForm />
      </>
    );
  }
}