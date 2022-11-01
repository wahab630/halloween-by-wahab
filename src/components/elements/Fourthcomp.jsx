import React from "react";
import "./fourth.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const Fourthcomp = () => {
  return (
    <>
      <div className=" fourth-bg p-4" id="documents">
        <div className=" fourth-uper  ">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div>
                  <span className="fourth-linebefore"></span>
                <span className="fw-bold"> Whitepaper</span>
                </div>
                
                <h2 className="fourth-h fw-bold mt-4 mb-5">
                  Read Our Documents
                </h2>
                <div className="d-flex flex-row flex-wrap">
                  <div>
                <span className="first-check fw-bold">
                  <CheckCircleRoundedIcon
                    className="checked me-2"
                    sx={{ fontSize: 50 }}
                  />
                  <span>KYC</span>
                </span>
                </div>
                <div>
                <span className="first-check fw-bold">
                  <CheckCircleRoundedIcon
                    className="checked me-2"
                    sx={{ fontSize: 50 }}
                  />
                  <span>Audit</span>
                </span>
                </div>
                <div>
                <span>
                  <CheckCircleRoundedIcon
                    className="checked me-2 "
                    sx={{ fontSize: 50 }}
                  />
                  <span className="fw-bold">Whitepaper</span>
                </span>
                </div>
                </div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn f-btn rounded-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   Download
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="no">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="no">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="no">
                        Something else here
                      </a>
                    </li>
                   
                    <li>
                      <a className="dropdown-item" href="no">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </div>

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
