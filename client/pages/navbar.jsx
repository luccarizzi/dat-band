import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar bg-dark bg-gradient'>
        <div className='container-fluid'>
          <a className='navbar-brand logo-font fs-1' href='#'>
            dat-band
          </a>
        </div>
      </nav>
    )
  }
}
