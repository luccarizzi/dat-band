import React from 'react';

function MusicianRecorded(props) {
  const recorded = props.musicianData;
  return (
    <div className='row'>
      <div className='bg-dark bg-gradient text-white mb-3'>
        <p className='py-3 mb-0 text-uppercase fw-bold'>Recorded</p>
        <ul className='list-unstyled page-font ps-2'>
          {
            recorded.map(record => {
              return (
                <a href={`#album/${record.albumId}`} key={record.albumId}>
                  <li className='row mb-3'>
                    <div className='col-3'>
                      <img className='album-image img-fluid border border-secondary' src={record.albumImageUrl}></img>
                    </div>
                    <div className='col-9'>
                      <p className='mb-0'>{record.albumTitle}</p>
                      <p className='mb-0 fw-lighter'>{record.releaseYear}</p>
                    </div>
                  </li>
                </a>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default MusicianRecorded;
