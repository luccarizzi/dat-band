import React from 'react';

export default class Videography extends React.Component {
  render() {
    const { videos } = this.props;

    return (
      <div className='col-12 bg-dark bg-gradient g-0 text-white page-font mb-3 g-0'>
        <div className='p-3'>
          <div className='pb-2'>
            <i className="fas fa-video"></i>
            <span className='ps-2 text-uppercase fw-bold'>Videography</span>
          </div>
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
}
