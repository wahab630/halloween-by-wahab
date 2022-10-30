import React from "react";
import "./hero.css";
import { FaTwitterSquare, FaTelegram } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="container-fluid " id="hero-pic">
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
                  class="btn h-btn btn-lg fw-bold rounded-pill"
                >
                  Buy
                </button>
                <br />
                <span>
                  {" "}
                  <FaTwitterSquare size={50} color="lightblue" />{" "}
                </span>{" "}
                <span>
                  <FaTelegram color="blueviolet" size={50} />{" "}
                </span>
                <p className="fw-bold mt-3">
                  Contract : 0x2c0e76dade015bc390a13c1b80cc1bafd9edd326
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
