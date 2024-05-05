import React from 'react'
import ContectForm from '../components/contectForm'
import contectCss from '../style/contect.module.css'


const Contect = () => {
  return (
    <div>
      <main className={`container-fluid ${contectCss.bkgrndimg}`}>
        <div className={`${contectCss.container} container`}>
          <div>
            <div className={contectCss.putdetiles}>
              <h2 className="text-white fw-bold">השאירו פרטים ונחזור אליכם בהקדם</h2>
            </div>
            <br />
            <ContectForm />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contect