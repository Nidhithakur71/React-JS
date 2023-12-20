import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <> <div className="header">
    <div className="container">
      <div className="header-p">
        <div className="header-flex">
          <div className="logo">
            <span className="fa-sharp fa-solid fa-music"></span>
          <a href="">Music Time</a>
        </div>
          <div className="nav">
            <ul>
              <li><a href="" className="active">Home</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Bold </a></li>
              <li><a href="">Pages</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faMoon} style={{color: "#f7783c"}}/>
          </div>
        </div>
      </div>
    </div>
</div>
</>
  )
}