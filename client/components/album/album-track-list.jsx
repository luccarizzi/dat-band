import React from 'react';

function AlbumTrackList(props) {
  const tracks = props.albumData;
  return (
    <div className='row justify-content-center'>
      <div className='col col-lg-8 mx-2 mb-2 text-white bg-dark bg-gradient rounded'>
        <div className='p-2 p-sm-3'>
          <h3 className='my-3 text-uppercase fw-bold font-title border-bottom'>Track List</h3>
          <table className='table text-white table-font'>
            <thead>
              <tr>
                <th scope='col'>No.</th>
                <th scope='col'>Title</th>
                <th scope='col'>Length</th>
              </tr>
            </thead>
            <tbody>
              {
                tracks.map(track => {
                  return (
                    <tr key={track.trackId}>
                      <td>{track.trackNo}</td>
                      <td className='text-break'>{track.track}</td>
                      <td>{track.length}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AlbumTrackList;
