import React from 'react';

import Logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header wrapper">
      <div className="header__container">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="Logo" />
        </div>

        <ul className="socials">
          <li>
            <a className="linkedin" href="https://www.linkedin.com/in/matheus-kristman-07a947171/" target="_blank" rel="noreferrer noopener">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a className="instagram" href="https://www.instagram.com/tinzin.exe/" target="_blank" rel="noreferrer noopener">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a className="github" href="https://github.com/MatheusKristman" target="_blank" rel="noreferrer noopener">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;