import React from 'react';

function BandDiscography(props) {
  const albums = props.bandData;
  return (
    <div className='row justify-content-center'>
      <div className='col col-lg-8 mx-3 mb-2 text-white bg-dark bg-gradient rounded'>
        <div className='p-2 p-sm-3'>
          <h3 className='my-3 text-uppercase fw-bold font-title border-bottom'>Discography</h3>
            <ul className='list-unstyled'>
              {
                albums.map(album => {
                  return (
                    <a href={`#album/${album.albumId}`} key={album.albumId} className='link-light text-decoration-none'>
                      <li className='row font-detail py-2 py-sm-3'>
                        <div className='col-5'>
                          <img className='img-fluid rounded' src={album.albumImageUrl}></img>
                        </div>
                        <div className='col-7'>
                          <p className='mb-1 mb-sm-2 text-decoration-underline font-title'>{album.albumTitle}</p>
                          <p className='mb-0 fw-lighter'>{album.recordLabel}</p>
                          <p className='mb-0 fw-lighter'>{album.releaseYear}</p>
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

export default BandDiscography;
