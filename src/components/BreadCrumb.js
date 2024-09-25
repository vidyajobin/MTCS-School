import React from 'react'

const BreadCrumb = (props) => {
  return (
    <div>
        <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 300 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>{props.pagename}</h1>
              <h4 className='mb-3'>Subheading</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
  )
}

export default BreadCrumb