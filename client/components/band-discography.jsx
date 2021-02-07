import React from 'react';

function BandDiscography(props) {
  const albums = props.bandData;
  return (
    <div className='row'>
      <div className='col-12 g-0 bg-dark bg-gradient g-0 text-white mb-3'>
        <p className='p-3 m-0 text-uppercase fw-bold'>Discography</p>
        <div className='row ps-3 pb-2 page-font'>
          <ul className='list-unstyled mb-0'>
            {
              albums.map(album => {
                return (
                  <li key={album.albumId} className='row mb-2'>
                    <div className='col-3'>
                      <img className='album-image img-fluid border border-secondary' src={album.albumImageUrl}></img>
                    </div>
                    <div className='col-9 g-0'>
                      <p className='m-0'>{album.albumTitle}</p>
                      <p className='m-0 fw-lighter'>{album.releaseYear}</p>
                    </div>
                  </li>
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
