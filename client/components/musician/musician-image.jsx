import React from 'react';

function MusicianImage(props) {
  const { musicianImageUrl, musicianFirstName, musicianLastName } = props.musicianData[0];
  return (
    <div className='row d-flex justify-content-center'>
      <div className='col col-sm-10 col-md-8 col-lg-6 g-3 mt-0'>
        <img className='w-100 rounded' src={musicianImageUrl} alt={`Musician ${musicianFirstName} ${musicianLastName}`}></img>
      </div>
    </div>
  );
}

export default MusicianImage;
