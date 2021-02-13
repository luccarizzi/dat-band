import React from 'react';

function BandVideography(props) {
  const videos = props.bandData;
  return (
    <div className='row justify-content-center'>
      <div className='col col-lg-8 mx-3 mb-2 text-white bg-dark bg-gradient rounded'>
        <h3 className='p-2 p-sm-3 my-3 text-uppercase fw-bold font-title border-bottom'>Videography</h3>
        <div className='d-flex flex-column align-items-center'>
          {
            videos.map(video => {
              return (
                <iframe
                  key={video.videoId}
                  src={`https://www.youtube.com/embed/${video.videoUrl}`}
                  className='pb-3 rounded img-fluid video-frame'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen>
                </iframe>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default BandVideography;
