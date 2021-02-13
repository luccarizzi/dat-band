import React from 'react';

function MusicianAssociated(props) {
  const associated = props.musicianData;
  return (
    <div className='row justify-content-center'>
      <div className='col col-lg-8 mx-2 mb-2 text-white bg-dark bg-gradient rounded'>
        <div className='p-2 p-sm-3'>
          <h3 className='my-3 text-uppercase fw-bold font-title border-bottom'>Associated</h3>
          <ul className='list-unstyled font-detail'>
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
    </div>
  );
}

export default MusicianAssociated;
