import React from 'react'
import FooterCss from '../style/footer.module.css'

const Footer = () => {
    return (
        <> <footer
        className={`${FooterCss.Footer} container-fluid position-relative d-flex justify-content-center align-items-center text-center text-dark`}>
            <div className={`${FooterCss.container} container d-flex justify-content-center align-items-center`}>
                <div className="col-4">
                    <a href="https://www.youtube.com/@simply_aviation" target="_blank"
                        className={`${FooterCss.a} fw-bolder text-body-secondary fa-1x`}><i className={`${FooterCss.ytIcon} fa fa-youtube-play fa-1x`} aria-hidden="true"></i></a>
                    <a href="https://twitter.com/davidger_21" target="_blank" className={`${FooterCss.a} fw-bolder text-body-secondary fa-1x`}><i
                       className={`${FooterCss.xIcon} fa fa-twitter`} aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com/people/David-Gershovitz/pfbid0SPrbN864bX84UKNRQA7yzECnXVT8tHn5yB7xawiSHEfNH8t7WAJzRyuoF6PnXVyUl/"
                        target="_blank" className={`${FooterCss.a} fw-bolder text-body-secondary fa-1x`}><i className={`${FooterCss.fsIcon} fa fa-facebook`}
                            aria-hidden="true"></i></a>
                </div>

                <div className={`${FooterCss.mydetails} col-4`}>
                    <h5  className='fs-6 fw-bold'>בונה האתר</h5>
                    <h5  className='fs-6 fw-bold'> דוד גרשוביץ בסמ"ח 10</h5>
                    <ul className={`${FooterCss.ul}`}>
                        <li>050-6869232</li>
                        <li>Davidger2000@gmail.com</li>
                    </ul>
                </div>
            </div>

        </footer></>
    )
}

export default Footer