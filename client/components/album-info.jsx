import React from 'react';

function AlbumInfo(props) {
  const { band, album, albumGenre } = props.albumData;
  return (
    <div className='col-12 bg-dark bg-gradient g-0 text-white page-font mb-3'>
      <div className='p-3'>
        <p className='m-0'><span className='fw-lighter'>Band:</span> {band[0].bandName}</p>
        <p className='m-0'><span className='fw-lighter'>Released:</span> {album[0].releaseYear}</p>
        <p className='m-0'><span className='fw-lighter'>Genre:</span> {albumGenre[0].genre}</p>
        <p className='m-0'><span className='fw-lighter'>Label:</span> {album[0].recordLabel}</p>
      </div>
    </div>
  );
}

export default AlbumInfo;
