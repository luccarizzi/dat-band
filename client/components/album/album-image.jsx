import React from 'react';

function AlbumImage(props) {
  const { albumImageUrl } = props.albumData[0];
  return (
    <div className='row d-flex justify-content-center'>
      <div className='col col-sm-10 col-md-8 col-lg-6 g-3'>
        <img className='w-100 rounded' src={albumImageUrl}></img>
      </div>
    </div>
  );
}

export default AlbumImage;
