import React from 'react';

function BandSeeAlso(props) {
  return (
    <div className='row'>
      <div className='bg-dark bg-gradient text-white mb-3'>
        <p className='py-3 mb-0 text-uppercase fw-bold section-title'>See Also</p>
        <div className='page-font'>
          <ul className='list-unstyled'>

              <a href='#' className='link-light text-decoration-none'>
                <li className='row mb-3'>
                  <div className='col-4'>
                    <img className='album-image img-fluid border border-secondary' src='https://cdn.mos.cms.futurecdn.net/siHgwBd6RWtMx2jKX8cK9b.jpg'></img>
                  </div>
                  <div className='col-8 d-flex'>
                    <p className='mb-0 text-decoration-underline align-self-center'>Iron Maiden</p>
                  </div>
                </li>
              </a>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default BandSeeAlso;
