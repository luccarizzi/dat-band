import React from 'react';

function AlbumImage(props) {
  const { albumImageUrl } = props.albumData[0];
  return (
    <div className='row'>
      <div className='col-12 g-0'>
        <img className='image-width' src={albumImageUrl}></img>
      </div>
    </div>

  );
}

export default AlbumImage;
