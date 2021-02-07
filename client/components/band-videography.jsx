import React from 'react';

function BandVideography(props) {
  const videos = props.bandData;
  return (
    <div className='col-12 bg-dark bg-gradient g-0 text-white page-font mb-3 g-0'>
      <div className='p-3'>
        <i className="fas fa-video"></i>
        <span className='ps-2 text-uppercase fw-bold'>Videography</span>
      </div>
      <div className=''>
      {
        videos.map(video => {
          return (
            <iframe
              key={video.videoId}
              src={`https://www.youtube.com/embed/${video.videoUrl}`}
              className='pb-2'
              width='320'
              height='220'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen>
            </iframe>
          );
        })
      }
      </div>
    </div>
  );
}

export default BandVideography;
