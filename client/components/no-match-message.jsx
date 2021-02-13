import React from 'react';

function NoMatchMessage(props) {
  const { search, category } = props.result;
  return (
    <div className='row justify-content-center'>
      <div className='col-12 col-lg-8 my-2'>
        <p className='alert alert-warning p-1'>Sorry, no {category}s found for &apos;{search}&apos;.</p>
      </div>
    </div>
  );
}

export default NoMatchMessage;
