import React from 'react';

function NotFound() {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col col-lg-8 m-3'>
          <h1 className='display-4'>Not Found</h1>
          <div className='alert alert-danger fw-light'>
            <p>
              Sorry, the page you are looking for does not exist.
            </p>
            <p>
              Click <a href='#' className=''>here</a> to go back.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
