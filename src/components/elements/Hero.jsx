import React from "react";
import "./hero.css";
import { FaTwitterSquare, FaTelegram } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="container-fluid hero-pic" >
        <div className="container-fuid mx-4">
          <div className="row d-flex">

            <div className="col-md-6 hero-sect1 ">
              <h2 className="hero-h fw-bold">Halloween </h2>
              <h2 className="hero-h fw-bold">Floki</h2>
            </div>

            <div className="col-md-6  rounded ">
              <div className="hero-sect2">
                <h2 className="hero-sh fw-bold">$FLOH Live Now!</h2>
                <button
                  type="button"
                  className="btn h-btn btn-lg fw-bold rounded-pill"
                >
                  Buy
                </button>
                <br />
                <span>
              
                  <FaTwitterSquare size={50} color="#1DA1F2FF" />{" "}
                </span>{" "}
                <span>
                  <FaTelegram color=" #745F98 " size={50} />{" "}
                </span>
                <div>
                <p className="fw-bold mt-3">
                  Contract : 0x2c0e76dade015bc390a1  3c1b80cc <br />1bafd9edd326
                </p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
