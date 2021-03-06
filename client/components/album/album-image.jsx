import React from 'react';

function AlbumImage(props) {
  const { albumImageUrl, albumTitle } = props.albumData[0];
  return (
    <div className='row d-flex justify-content-center'>
      <div className='col col-sm-10 col-md-8 col-lg-6 g-3 mt-0'>
        <img className='w-100 rounded' src={albumImageUrl} alt={`${albumTitle} album cover.`}></img>
      </div>
    </div>
  );
}

export default AlbumImage;
