import React from 'react';

function BandTitle(props) {
  const { bandName } = props.bandData[0];
  return (
    <div className='row justify-content-center'>
      <div className='col col-lg-8 m-2'>
        <h1 className='display-4'>{bandName}</h1>
      </div>
    </div>
  );
}

export default BandTitle;
