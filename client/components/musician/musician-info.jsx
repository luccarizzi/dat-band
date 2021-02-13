import React from 'react';

function MusicianInfo(props) {
  const { dob, city, state, country } = props.musicianData[0];
  return (
    <div className='row justify-content-center'>
      <div className='col col-lg-8 m-2 mb-2 text-white bg-dark bg-gradient rounded font-detail'>
        <div className='p-2 p-sm-3'>
          <p className='m-0'><span className='fw-lighter'>Born:</span> {dob}</p>
          <p className='m-0 mb-sm-1'><span className='fw-lighter'>From:</span> {city}, {state}, {country}</p>
        </div>
      </div>
    </div>
  );
}

export default MusicianInfo;
