import React from 'react';

function AlbumTitle(props) {
  const { albumTitle } = props.albumData[0];
  return (
    <div className='row'>
      <div className='col-12 my-2'>
        <h1 className='display-6'>{albumTitle}</h1>
      </div>
    </div>
  );
}

export default AlbumTitle;
