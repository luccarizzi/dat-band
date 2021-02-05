import React from 'react';

function BandPage(props) {
  return (
    <div className='container'>
      <div className='row'>

        <div className='col-12 g-0'>
          <img className='img-fluid' src='https://static.billboard.com/files/media/metallica-portrait-nov-1986-billboard-1548-1024x677.jpg'></img>
        </div>

        <div className='col-12'>
          <h1 className='display-1'>Metallica</h1>
        </div>

        <div className='col-12 bg-dark bg-gradient g-0 text-white page-font mb-3'>
          <div className='p-3'>
            <div className='pb-2'>
              <i className="fas fa-map-marker-alt"></i>
              <span className='ps-2'>Los Angeles, CA, United States</span>
            </div>
            <div className='pb-2'>
              <i className="fas fa-music"></i>
              <span className='ps-2'>Heavy Metal</span>
            </div>
            <div>
              <i className="fas fa-users"></i>
              <span className='ps-2'>Current:</span>
              <ul className='detail-font mb-0 pb-2'>
                <li>James Hetfield</li>
                <li>Kirk Hammett</li>
                <li>Robert Trujillo</li>
                <li>Lars Ulrich</li>
              </ul>
            </div>
            <div>
              <i className="fas fa-users-slash"></i>
              <span className='ps-2'>Past:</span>
              <ul className='detail-font mb-2'>
                <li>Dave Mustaine</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='col-12 bg-dark bg-gradient g-0 text-white page-font mb-3'>
          <div className='p-3'>
            <div className='pb-2'>
              <i className="fas fa-record-vinyl"></i>
              <span className='ps-2 text-uppercase fw-bold'>Discography</span>
            </div>
            <ul className='list-unstyled ps-2 mb-2'>
              <li>1983 - Kill Em All</li>
              <li>1984 - Ride the Lightning</li>
              <li>1986 - Master of Puppets</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BandPage;
