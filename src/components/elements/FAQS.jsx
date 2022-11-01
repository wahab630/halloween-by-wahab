import React from "react";
import "./faqs.css";
import Faqleft from './Faqleft'
import { FaTwitterSquare } from "react-icons/fa";
import TelegramIcon from "@mui/icons-material/Telegram";

const FAQS = () => {
  return (
    <>
      <div className="container-fluid px-3 py-5" id="faqs">
        <div className="container-fluid py-5">
          <div className="mb-5 ">
            <span className="faq-beforeline"></span>
          <span className="fw-bold"> FAQS </span>
          <h3 className="faq-heading mt-3">Frequently Asked Questions</h3></div>
          <div className="row">
            <div className="col-md-6">
              <div className="setfaq">
              <Faqleft/>
              </div>
                
            </div>
            <div className="col-md-6">
              <div className="faq-img-box">
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
            <span>
                <FaTwitterSquare
                  className="twitter-icon"
                  size={40}
                  color="#1DA1F2FF"
                />{" "}
              </span>
              <TelegramIcon className="telegram-i" sx={{ fontSize: 50 }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQS;
