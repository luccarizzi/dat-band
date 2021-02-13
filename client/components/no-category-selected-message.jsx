import React from 'react';

const NoCategorySelectedMessage = props => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-lg-8 my-2'>
          <p className='alert alert-warning p-1'>Please select a category (band, album or musician).</p>
        </div>
      </div>
    </div>
  );
};

export default NoCategorySelectedMessage;
