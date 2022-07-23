import React from "react";
import Link from "next/link";
import { DataW } from "../data/dataWindows";
import { DataR } from "../data/dataRocky";
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Home</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Rocky Linux
              </a>
              <div className="dropdown-menu">
                {DataR.map((e) => (
                  <Link href={"/" + e.titulo}>
                    <a key={e.titulo} className="dropdown-item">{e.titulo}</a>
                  </Link>
                ))}
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Windows Server
              </a>
              <div className="dropdown-menu">
                {DataW.map((e) => (
                  <Link href={"/" + e.titulo}>
                    <a key={e.titulo} className="dropdown-item">{e.titulo}</a>
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
     
    </nav>
  );
};

export default Navigation;
