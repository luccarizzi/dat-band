import React from 'react';

function MusicianAssociated(props) {
  const associated = props.musicianData;
  return (
    <div className='row'>
      <div className='bg-dark bg-gradient text-white mb-3'>
        <p className='py-3 mb-0 text-uppercase fw-bold'>Associated</p>
        <ul className='list-unstyled page-font ps-2'>
          {
            associated.map(association => {
              return (
                <li key={association.bandId}>{association.bandName}</li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default MusicianAssociated;
