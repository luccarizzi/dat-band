import React from 'react';

function AlbumInfo(props) {
  const { bandName, releaseYear, genre, recordLabel, bandId } = props.albumData[0];
  return (
    <div className='row justify-content-center'>
      <div className='col col-lg-8 m-2 mb-2 text-white bg-dark bg-gradient rounded font-detail'>
        <div className='p-2 p-sm-3'>
          <p className='m-0'><span className='fw-lighter'>Band:</span> <a href={`#band/${bandId}`} className='link-light'>{bandName}</a></p>
          <p className='m-0'><span className='fw-lighter'>Released:</span> {releaseYear}</p>
          <p className='m-0'><span className='fw-lighter'>Genre:</span> {genre}</p>
          <p className='m-0 mb-sm-1'><span className='fw-lighter'>Label:</span> {recordLabel}</p>
        </div>
      </div>
    </div>

  );
}

export default AlbumInfo;
