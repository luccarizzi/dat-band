import React from 'react';

function MusicianRecorded(props) {
  const recorded = props.musicianData;
  return (
    <div className='row justify-content-center'>
      <div className='col col-lg-8 mx-2 mb-2 text-white bg-dark bg-gradient rounded'>
        <div className='p-2 p-sm-3'>
          <h3 className='my-3 text-uppercase fw-bold font-title border-bottom'>Recorded</h3>
          <ul className='list-unstyled'>
            {
              recorded.map(record => {
                return (
                  <a href={`#album/${record.albumId}`} key={record.albumId} className='link-light text-decoration-none'>
                    <li className='row font-detail py-2 py-sm-3'>
                      <div className='col-5'>
                        <img className='img-fluid rounded' src={record.albumImageUrl}></img>
                      </div>
                      <div className='col-7'>
                        <p className='mb-1 mb-sm-2 text-decoration-underline font-title'>{record.albumTitle}</p>
                        <p className='mb-0 fw-lighter'>{record.recordLabel}</p>
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
    </div>
  );
}

export default MusicianRecorded;
