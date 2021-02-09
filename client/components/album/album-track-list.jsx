import React from 'react';

function AlbumTrackList(props) {
  const tracks = props.albumData;
  return (
    <div className='row'>
      <div className='bg-dark bg-gradient text-white mb-3'>
        <p className='py-3 mb-0 text-uppercase fw-bold section-title'>Track List</p>
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
  );
}

export default AlbumTrackList;
