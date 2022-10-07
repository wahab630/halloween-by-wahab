import React from "react";
import "./fourth.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const Fourthcomp = () => {
  return (
    <>
      <div className="container-fluid fourth-bg p-5">
        <div className="container-fluid fourth-uper  ">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <p className="fw-bold"> Whitepaper</p>
                <h2 className="fourth-h fw-bold mt-2 mb-5">Read Our Documents</h2>
                <span  className="first-check fw-bold">
                  <CheckCircleRoundedIcon className="checked me-2" sx={{ fontSize: 50}}/>
                  <span>KYC</span>
                </span>
                <span  className="first-check fw-bold">
                  <CheckCircleRoundedIcon className="checked me-2" sx={{ fontSize: 50}} />
                  <span>Audit</span>
                </span>
                <span>
                  <CheckCircleRoundedIcon className="checked me-2 " sx={{ fontSize: 50}}/>
                  <span className="fw-bold">Whitepaper</span>
                </span>
              </div>
              <div className="col-md-4">
                <div>
                  <img
                  className="fourt-img"
                    src="https://halloweenfloki.co/wp-content/uploads/2022/08/IMG_2571-982x1024.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fourthcomp;
