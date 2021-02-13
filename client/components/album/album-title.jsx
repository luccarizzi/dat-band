import React from 'react';

function AlbumTitle(props) {
  const { albumTitle } = props.albumData[0];
  return (
    <div className='row justify-content-center'>
      <div className='col col-lg-8 m-2'>
        <h1 className='display-4'>{albumTitle}</h1>
      </div>
    </div>
  );
}

export default AlbumTitle;
