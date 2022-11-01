import React from "react";
import "./header.css";


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top  my-0 py-0">
        <div className="container-fluid">
          <a className="navbar-brand ms-3" href="/">
            <img
              className="logo"
              src="https://halloweenfloki.co/wp-content/uploads/2022/08/FLOH_Logo-removebg-preview.png"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold me-4" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold me-4 " href="#tokenomics">
                  Tokenomics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold me-4 " href="#roadmap">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold me-4 " href="#documents">
                  Documents
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold me-4" href="#faqs">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold me-4 " href="https://halloweenfloki-raffle-tickets.netlify.app/">
                  MINT FLOH RAFFLE NFT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
