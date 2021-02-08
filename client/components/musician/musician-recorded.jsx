import React from 'react';

function MusicianRecorded(props) {
  return (
    <div className='row'>
      <div className='bg-dark bg-gradient text-white mb-3'>
        <p className='py-3 mb-0 text-uppercase fw-bold'>Recorded</p>
        <ul className='list-unstyled page-font ps-2'>
          <li className='row mb-3'>
            <div className='col-3'>
              <img className='album-image img-fluid border border-secondary' src='https://upload.wikimedia.org/wikipedia/en/5/5c/Metallica_-_Kill_%27Em_All_cover.jpg'></img>
            </div>
            <div className='col-9'>
              <p className='mb-0'>Kill Em All</p>
              <p className='mb-0 fw-lighter'>1983</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MusicianRecorded;
