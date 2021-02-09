import React from 'react';

function AlbumInfo(props) {
  const { bandName, releaseYear, genre, recordLabel, bandId } = props.albumData[0];
  return (
    <div className='row'>
      <div className='bg-dark bg-gradient text-white page-font mb-3'>
        <div className='py-3'>
          <p className='m-0'><span className='fw-lighter'>Band:</span> <a href={`#band/${bandId}`}>{bandName}</a></p>
          <p className='m-0'><span className='fw-lighter'>Released:</span> {releaseYear}</p>
          <p className='m-0'><span className='fw-lighter'>Genre:</span> {genre}</p>
          <p className='m-0'><span className='fw-lighter'>Label:</span> {recordLabel}</p>
        </div>
      </div>
    </div>

  );
}

export default AlbumInfo;
