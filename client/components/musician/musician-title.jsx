import React from 'react';

function MusicianTitle(props) {
  const { musicianFirstName, musicianLastName } = props.musicianData[0];
  return (
    <div className='row justify-content-center'>
      <div className='col col-lg-8 m-2'>
        <h1 className='display-4'>{musicianFirstName} {musicianLastName}</h1>
      </div>
    </div>
  );
}

export default MusicianTitle;
