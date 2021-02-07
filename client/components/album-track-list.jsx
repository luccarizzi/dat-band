import React from 'react';

function AlbumTrackList(props) {
  const tracks = props.albumData;
  return (
    <div className='col-12 bg-dark bg-gradient g-0 text-white mb-3'>
      <p className='p-3 m-0 text-uppercase fw-bold'>Track List</p>
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
  );
}

export default AlbumTrackList;
