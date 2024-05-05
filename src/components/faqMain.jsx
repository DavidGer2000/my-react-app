import React from 'react'
import { NavLink } from 'react-router-dom'
import FaqAcordion from './faqAcordion'
import FaqSss from '../style/faq.module.css'

const FaqMain = () => {
  return (
    <>
      <main className='container-fluid justify-content-center align-items-center text-center bg-light text-dark py-5'>
        <div className='container'>
          <FaqAcordion />
        </div>
        <div className={`${FaqSss.container} container `}>
            <div> <NavLink className="fw-bolder text-body-secondary" to="/conect"><h1 className="text-white fw-bold">winter 2024 start to saving</h1></NavLink></div>
          </div>
      </main>
    </>
  )
}

export default FaqMain