import React, { Component } from 'react'
import "./mystyle.css"
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
<nav className="navbar navbar-expand-lg navbar-light background fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand text-light h1" href="#">NewsSite</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/"><a className="nav-link text-light active" aria-current="page">Home</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/politics"><a className="nav-link text-light" >Politics</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/education"><a className="nav-link text-light" >Education</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/technology"><a className="nav-link text-light" >Technology</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/sports"><a className="nav-link text-light" >Sports</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/covid19"><a className="nav-link text-light">Covid19</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/crime"><a className="nav-link text-light">Crime</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/jokes"><a className="nav-link text-light">Jokes</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/entertainment"><a className="nav-link text-light">Entertainment</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<br></br>
<br></br>
<br></br>
      </>
    )
  }
}
