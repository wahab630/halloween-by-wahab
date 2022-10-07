import React from "react";
import "./header.css";
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg   my-0 py-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
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
                <Link className="nav-link " aria-current="page" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link  fw-bold " href="#">
                  Tokenomics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Documents
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
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
