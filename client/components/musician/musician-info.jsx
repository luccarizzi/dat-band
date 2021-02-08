import React from 'react';

function MusicianInfo(props) {
  return (
    <div className='row'>
      <div className='bg-dark bg-gradient text-white page-font mb-3'>
        <div className='py-3'>
          <p className='m-0'><span className='fw-lighter'>Born:</span> January 1, 1999</p>
          <p className='m-0'><span className='fw-lighter'>Released:</span> Los Angeles</p>
        </div>
      </div>
    </div>
  );
}

export default MusicianInfo;
