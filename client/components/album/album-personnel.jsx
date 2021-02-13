import React from 'react';

function AlbumPersonnel(props) {
  const personnel = props.albumData;
  return (
    <div className='row justify-content-center'>
      <div className='col col-lg-8 mx-2 mb-2 text-white bg-dark bg-gradient rounded'>
        <div className='p-2 p-sm-3'>
          <h3 className='my-3 text-uppercase fw-bold font-title border-bottom'>Personnel</h3>
          <ul className='list-unstyled font-detail'>
            {
              personnel.map(person => {
                return (
                  <a href={`#musician/${person.musicianId}`} key={person.musicianId} className='link-light'>
                    <li>
                      {person.musicianFirstName} {person.musicianLastName}
                    </li>
                  </a>
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AlbumPersonnel;
