import React from 'react';

function BandDiscography(props) {
  const albums = props.bandData;
  return (
    <div className='row'>
      <div className='bg-dark bg-gradient text-white mb-3'>
        <p className='py-3 mb-0 text-uppercase fw-bold'>Discography</p>
        <div className='page-font'>
          <ul className='list-unstyled'>
            {
              albums.map(album => {
                return (
                  <a href={`#album/${album.albumId}`} key={album.albumId}>
                    <li className='row mb-3'>
                      <div className='col-3'>
                        <img className='album-image img-fluid border border-secondary' src={album.albumImageUrl}></img>
                      </div>
                      <div className='col-9'>
                        <p className='mb-0'>{album.albumTitle}</p>
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
