import React from "react";
import "./faqs.css";
import Faqleft from './Faqleft'
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const FAQS = () => {
  return (
    <>
      <div className="container-fluid px-3 py-5">
        <div className="container-fluid py-5">
          <div className="mb-5 ">
          <p className="fw-bold"> _______FAQS </p>
          <h3 className="faq-heading">Frequently Asked Questions</h3></div>
          <div className="row">
            <div className="col-md-6">
              <div className="setfaq">
              <Faqleft/>
              </div>
                
            </div>
            <div className="col-md-6">
              <div>
                <img
                  className="faq-img"
                  src="https://halloweenfloki.co/wp-content/uploads/2022/04/question.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col text-center faq-i">
              <TwitterIcon className="twitter-i" sx={{ fontSize: 50 }} />{" "}
              <TelegramIcon className="telegram-i" sx={{ fontSize: 50 }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQS;
