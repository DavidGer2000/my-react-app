import React from 'react'
import CraeteGallery from '../components/craeteGallery'





const Gallery = () => {
  return (
    <>
      <main className='container-fluid bg-light text-dark'>
        <div className='container d-block justify-content-center py-4'>
          <div className="m-auto d-flex justify-content-center text-center">
            <h2 className='fst-italic'>Among the investors in venture capital funds worldwide, you can find:</h2>
          </div>
          <CraeteGallery />
        </div>
      </main>
    </>
  )
}

export default Gallery