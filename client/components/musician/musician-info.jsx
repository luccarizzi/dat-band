import React from 'react';

function MusicianInfo(props) {
  const { dob, city, state, country } = props.musicianData[0];
  return (
    <div className='row'>
      <div className='bg-dark bg-gradient text-white page-font mb-3'>
        <div className='py-3'>
          <p className='m-0'><span className='fw-lighter'>Born:</span> {dob}</p>
          <p className='m-0'><span className='fw-lighter'>From:</span> {city}, {state}, {country}</p>
        </div>
      </div>
    </div>
  );
}

export default MusicianInfo;
