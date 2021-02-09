import React from 'react';

function MusicianAssociated(props) {
  const associated = props.musicianData;
  return (
    <div className='row'>
      <div className='bg-dark bg-gradient text-white mb-3'>
        <p className='py-3 mb-0 text-uppercase fw-bold section-title'>Associated</p>
        <ul className='list-unstyled page-font ps-2'>
          {
            associated.map(association => {
              return (
                <a href={`#band/${association.bandId}`} key={association.bandId} className='link-light'>
                  <li>{association.bandName}</li>
                </a>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default MusicianAssociated;
