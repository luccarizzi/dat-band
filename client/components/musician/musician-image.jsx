import React from 'react';

function MusicianImage(props) {
  const { musicianImageUrl } = props.musicianData[0];
  return (
    <div className='row d-flex justify-content-center'>
      <div className='col col-sm-10 col-md-8 col-lg-6 g-3'>
        <img className='w-100 rounded' src={musicianImageUrl}></img>
      </div>
    </div>
  );
}

export default MusicianImage;
