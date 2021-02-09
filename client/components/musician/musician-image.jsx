import React from 'react';

function MusicianImage(props) {
  const { musicianImageUrl } = props.musicianData[0];
  return (
    <div className='row'>
      <div className='musician-image g-0'>
        <img className='img-fluid' src={musicianImageUrl}></img>
      </div>
    </div>
  );
}

export default MusicianImage;
