import React from "react";
import "./firstcomp.css";
import { FaTwitterSquare } from "react-icons/fa";
import TelegramIcon from "@mui/icons-material/Telegram";

const Firstcomp = () => {
  return (
    <>
      <div className="continer-fuid" id="about">
        <div className="container-fluid first-comp">
          <div className="row">
            <div className="col-md-6 first-left">
              <span className="first-linebefore"> </span>
              <span className="fw-bold"> WHAT IS HALLOWEEN FLOKI</span>
              <h2 className="first-h fw-bold ">
                From the Team That <br /> Brought You Valentine <br /> Floki
              </h2>
              <div>
              <p className="first-p">
                Halloween Floki (FLOH) is a meme cryptocurrency token operating
                on the BEP-20 Blockchain technology (Binance Smart Chain). With
                the great experience, knowledge and wisdom of the core team,
                FLOH will attempt to peak at the highest market cap a Floki
                sub-project has ever reached, all while distributing BUSD
                rewards every day to its holders.
              </p>
              </div>
              
              <p className="first-p2">
                We are taking advantage of the upcoming Holiday to gain the
                crypto community’s attention but as the weeks go by, this
                project will gain its reputation through continuous
                communication with its investors, aggressive marketing
                campaigns, listings and constant deliveries from the leadership
                team. Backed by cryptocurrency and stock market whales, we
                invite you on this journey to the double-digits millions market
                cap!
              </p>
              <span>
                <FaTwitterSquare
                  className="twitter-icon"
                  size={40}
                  color="#1DA1F2FF"
                />{" "}
              </span>
              <span>
              <TelegramIcon className="telegram-i" sx={{ fontSize: 50 }} />
              </span>
            </div>

            <div className="col-md-6 ">
              <img
                className="firstimg"
                src="https://halloweenfloki.co/wp-content/uploads/2022/08/FLOH_Logo-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Firstcomp;
