import React from 'react';

function BandTitle(props) {
  const { bandName } = props.bandData[0];
  return (
    <div className='row'>
      <div className='col-12'>
        <h1 className='display-1'>{bandName}</h1>
      </div>
    </div>
  );
}

export default BandTitle;
