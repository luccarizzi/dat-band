import React from 'react';

function BandInfo(props) {
  const { city, state, country, bandGenre, debutYear } = props.bandData[0];
  return (
    <div className='row'>
      <div className='bg-dark bg-gradient text-white page-font mb-3'>
        <div className='py-3'>
          <p className='m-0'><span className='fw-lighter'>Genre:</span> {bandGenre}</p>
          <p className='m-0'><span className='fw-lighter'>Debut:</span> {debutYear}</p>
          <p className='m-0'><span className='fw-lighter'>Location:</span> {city}, {state}, {country}</p>
        </div>
      </div>
    </div>
  );
}

export default BandInfo;
