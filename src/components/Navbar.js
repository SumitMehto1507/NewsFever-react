import { Link } from 'react-router-dom'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar text-light bg-danger " style={{backgroundColor: "#9abccc"}}>
        <div className="container-fluid">
          <div className="navbar-brand text-light" > <strong>News Fever</strong></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-Link"> <Link className="nav-link text-light" to="/">Home</Link> </li>
              {/* <li className="nav-item"> <Link  className="nav-link text-light" to="/general">General</Link></li> */}
              {/* <li className="nav-item"> <Link className="nav-link text-light" to="/business">Business </Link></li> */}
              <li className="nav-item"> <Link className="nav-link text-light" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"> <Link className="nav-link text-light" to="/health">Health</Link></li>
              <li className="nav-item"> <Link className="nav-link text-light" to="/science">Science</Link></li>
              <li className="nav-item"> <Link className="nav-link text-light" to="/sports">Sports</Link></li>
              <li className="nav-item"> <Link className="nav-link text-light" to="/technology">Technology</Link></li>
              {/* <li className="nav-item"><Link key={About} className="nav-link text-light" to="/About">About Us</Link> </li> */}
              {/* <li className="nav-item dropdown text-light">
                <a className="nav-link dropdown-toggle text-light" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown </a>
                <ul className="dropdown-menu text-light" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}



