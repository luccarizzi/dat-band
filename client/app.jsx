import React from 'react';
// import Home from './pages/home';
import Navbar from './pages/navbar';
import SearchForm from './pages/search-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.getParameters = this.getParameters.bind(this);
  }

  getParameters(parameters) {
    // console.log('Parameters', parameters)
  }

  render() {
    return (
      <>
        <Navbar />
        <SearchForm onChange={this.getParameters}/>
      </>
    );
  }
}
