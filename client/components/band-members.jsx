import React from 'react';

function BandMembers(props) {
  const members = props.bandData;
  return (
    <div className='row'>
      <div className='col-12 g-0 bg-dark bg-gradient g-0 text-white mb-3'>
        <p className='p-3 m-0 text-uppercase fw-bold'>Members</p>
        <div className='row ps-3 pb-3 page-font'>
          <p className='col-3 m-0 fw-lighter'>Current:</p>
          <ul className='col-9 list-unstyled mb-0'>
            {
              members.map(member => {
                let li;
                if (member.current) {
                  li = <li key={member.musicianId}>{member.musicianFirstName} {member.musicianLastName}</li>;
                }
                return li;
              })
            }
          </ul>
        </div>
        <div className='row ps-3 pb-3 page-font'>
          <p className='col-3 m-0 fw-lighter'>Former:</p>
          <ul className='col-9 list-unstyled mb-0'>
            {
              members.map(member => {
                let li;
                if (!member.current) {
                  li = <li key={member.musicianId}>{member.musicianFirstName} {member.musicianLastName}</li>;
                }
                return li;
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BandMembers;
