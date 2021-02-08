import React from 'react';

function AlbumPersonnel(props) {
  const personnel = props.albumData;
  return (
    <div className='row'>
      <div className='bg-dark bg-gradient text-white mb-3'>
        <p className='py-3 mb-0 text-uppercase fw-bold'>Personnel</p>
        <ul className='list-unstyled page-font ps-2'>
          {
            personnel.map(person => {
              return (
                <li key={person.musicianId}>{person.musicianFirstName} {person.musicianLastName}</li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default AlbumPersonnel;
