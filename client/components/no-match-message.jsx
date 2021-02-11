import React from 'react';

function NoMatchMessage(props) {
  const { search, category } = props.result;
  return (
    <div className='row'>
      <div className='col my-2'>
        <p>Sorry, no {category}s found for &apos;{search}&apos;.</p>
      </div>
    </div>
  );
}

export default NoMatchMessage;
