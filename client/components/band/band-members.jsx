import React from 'react';

function BandMembers(props) {
  const members = props.bandData;
  return (
    <div className='row justify-content-center'>
      <div className='col col-lg-8 mx-3 mb-2 text-white bg-dark bg-gradient rounded'>
        <div className='p-2 p-sm-3'>
          <h3 className='my-3 text-uppercase fw-bold font-title border-bottom'>Members</h3>
          <div className='row font-detail'>
            <p className='col-4 col-sm-2 fw-lighter'>Current:</p>
            <ul className='col-8 col-sm-4 list-unstyled'>
              {
                members.map(member => {
                  let li;
                  if (member.current) {
                    li =
                      <a href={`#musician/${member.musicianId}`} key={member.musicianId} className='link-light'>
                        <li>
                          {member.musicianFirstName} {member.musicianLastName}
                        </li>
                      </a>;
                  }
                  return li;
                })
              }
            </ul>
            <p className='col-4 col-sm-2 fw-lighter'>Former:</p>
            <ul className='col-8 col-sm-4 list-unstyled'>
              {
                members.map(member => {
                  let li;
                  if (!member.current) {
                    li =
                      <a href={`#musician/${member.musicianId}`} key={member.musicianId} className='link-light'>
                        <li>
                          {member.musicianFirstName} {member.musicianLastName}
                        </li>
                      </a>;
                  }
                  return li;
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BandMembers;
