import React from 'react';

function BandMembers(props) {
  const members = props.bandData;
  return (
    <div className='row'>
      <div className='bg-dark bg-gradient text-white mb-3'>
        <p className='py-3 mb-0 text-uppercase fw-bold'>Members</p>
        <div className='row page-font'>
          <p className='col-3 fw-lighter'>Current:</p>
          <ul className='col-9 list-unstyled'>
            {
              members.map(member => {
                let li;
                if (member.current) {
                  li =
                    <a href={`#musician/${member.musicianId}`} key={member.musicianId}>
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
        <div className='row page-font'>
          <p className='col-3 fw-lighter'>Former:</p>
          <ul className='col-9 list-unstyled'>
            {
              members.map(member => {
                let li;
                if (!member.current) {
                  li =
                    <a href={`#musician/${member.musicianId}`} key={member.musicianId}>
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
  );
}

export default BandMembers;
