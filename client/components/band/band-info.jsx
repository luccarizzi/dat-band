import React from 'react';

function BandInfo(props) {
  const { city, state, country, bandGenre, debutYear } = props.bandData[0];
  return (
    <div className='row justify-content-center'>
      <div className='col col-lg-8 mx-3 mb-2 text-white bg-dark bg-gradient rounded font-detail'>
        <div className='p-2 p-sm-3'>
          <p className='mb-0'><span className='fw-lighter'>Genre:</span> {bandGenre}</p>
          <p className='mb-0'><span className='fw-lighter'>Debut:</span> {debutYear}</p>
          <p className='mb-0 mb-sm-1'><span className='fw-lighter'>From:</span> {city}, {state}, {country}</p>
        </div>
      </div>
    </div>
  )
}

export default BandInfo;
