import React from 'react';

const NoCategorySelectedMessage = props => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col my-2'>
          <p className='alert alert-warning p-1'>Please select a category (band, album or musician).</p>
        </div>
      </div>
    </div>
  );
};

export default NoCategorySelectedMessage;
