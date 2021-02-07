import React from 'react';

function AlbumTrackList() {
  return (
    <div className='col-12 bg-dark bg-gradient g-0 text-white mb-3'>
      <p className='p-3 m-0 text-uppercase fw-bold'>Track List</p>
      <table className='table text-white table-font'>
        <thead>
          <tr className=''>
            <th scope='col'>No.</th>
            <th scope='col'>Title</th>
            <th scope='col'>Length</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className='text-break'>song song sing</td>
            <td>1:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AlbumTrackList;
