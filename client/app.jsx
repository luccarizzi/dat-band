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

    // console.log(parameters)

    fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(parameters)
    })
      .then(res => res.json())
      .then(final => console.log(final))
      .catch(err => console.error(err));

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
