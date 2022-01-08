import React from "react";
import { useLocation } from "react-router-dom";

import logo from "../assets/logo.png";

export default function NavBar() {
  const location = useLocation();

  var mwclass = "nav-link ";
  var cwclass = "nav-link dropdown-toggle ";
  var vgclass = "nav-link dropdown-toggle ";

  switch (true) {
    case location.pathname.includes("damascus"):
      mwclass += "active";
      break;
    case location.pathname.includes("dmultra"):
      cwclass += "active";
      break;
    case location.pathname.includes("darkmatter"):
      cwclass += "active";
      break;
    case location.pathname.includes("atomic"):
      vgclass += "active";
      break;
    case location.pathname.includes("darkaether"):
      vgclass += "active";
      break;
    default:
      break;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-local shelf">
      <div className="container-fluid">
        <a className="navbar-brand" href="/dashboard">
          <h3 className="title-brand">
            <img src={logo} alt="logo" className="title-logo" />
            Camo Tracker
          </h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={mwclass} aria-current="page" href="/damascus">
                Modern Warfare
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className={cwclass}
                href="/dmultra"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cold War
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/dmultra">
                    DM Ultra
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/darkmatter">
                    Dark Matter
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className={vgclass}
                href="/atomic"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Vanguard
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/atomic">
                    Atomic
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/darkaether">
                    Dark Aether
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
