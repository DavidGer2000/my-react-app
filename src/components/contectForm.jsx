import React from 'react'
import contectCss from '../style/contect.module.css'

const ContectForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    

    alert("הטופס נשלח בהצלחה")
  }

  return (
    <><form className={contectCss.form} action="#" onSubmit={handleSubmit} >
    <label className="text-white fw-bold">Name:</label>
    <input type="text" className="form-control name" placeholder="name" />
    <br />
  
    <label className="text-white fw-bold">Phone:</label>
    <input type="tel" className="form-control phone" placeholder="enter your phone" name="txt_Phone" />
    <br />
  
    <label className="text-white fw-bold">Email address:</label>
    <input type="email" className="form-control email" placeholder="name@example.com" />
    <br />
  
    <label className="text-white fw-bold">Comments:</label>
    <textarea className="form-control" placeholder="Leave a comment here"></textarea>
    <br />
  
    <input type="checkbox" className="form-check-input" id="gridCheck1" />
    <label className="form-check-label text-white" htmlFor="gridCheck1">
      מאשר/ת לקבל חומר שיווקי
    </label>
    <br />
    <div className={contectCss.buttonclass}>
      <button type="submit" className="btn btn-primary bg-body text-dark btn-sm">
        שלח
      </button>
    </div>
  </form>
  </>
  )
}

export default ContectForm