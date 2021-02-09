import React from 'react';

function MusicianTitle(props) {
  const { musicianFirstName, musicianLastName } = props.musicianData[0];
  return (
    <div className='row'>
      <div className='col-12 my-2'>
        <h1 className='display-6'>{musicianFirstName} {musicianLastName}</h1>
      </div>
    </div>
  );
}

export default MusicianTitle;
