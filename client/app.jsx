import React from 'react';
import Navbar from './pages/navbar';
import SearchForm from './pages/search-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <>
        <Navbar />
        <SearchForm />
      </>
    );
  }
}
