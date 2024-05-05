import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header class="container-fluid d-flex justify-content-center align-items-center text-center text-dark">
    <div class="container">
        <nav className="navbar navbar-expand-sm rounded" aria-label="Twelfth navbar example">
            <div class="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-sm-center" id="navbarsExample10">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bolder text-body-secondary" to="/">home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link fw-bolder text-body-secondary" to="/abaout">abaout</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link fw-bolder text-body-secondary" to="/faq">faq</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link fw-bolder text-body-secondary" to="/gallery">gallery</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link fw-bolder text-body-secondary" to="/conect">conect</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>
  )
}

export default Header