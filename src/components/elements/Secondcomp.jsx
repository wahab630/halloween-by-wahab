import React from "react";
import { FaDollarSign , FaBullhorn,FaWater ,FaUserShield} from "react-icons/fa";
import "./secondcomp.css";

const Secondcomp = () => {
  return (
    <>
      <div className="container-fluid second-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <p className="fw-bold mb-4"> WHAT IS OUR TOKENOMICS</p>
              <p className=" mb-5">
                 At Halloween Floki, we are designing a
                project based on definitive market rules and fundamental
                economic principles. Halloween Floki reconciles a
                high-performance protocol with integral price stability
                features.
              </p>
              <p className=" mb-5">Total Sudopply: 1 000 000 000 000 FLOH</p>
              <p className=" mb-5">8% Buy and Sell Tax:</p>
              <ul>
                <li className="mb-1">
                  4% holders rewards: Dividend tax on all transactions that will
                  be distributed every 24 hours to holders in BUSD.
                </li>
                <li className="mb-1" >
                  1% liquidity: Liquidity tax on all transactions to prevent
                  major price fluctuation after a large trade by filling the
                  liquidity pool.
                </li>
                <li className="mb-1">
                  3% marketing: Marketing tax on all transactions allows the
                  Halloween Floki marketing team to reinvest and grow the
                  project to its maximum potential.
                </li>
              </ul>
              <p className="fw-bold mt-4">  WHAT ARE OUR FEATURES</p>
            </div>
          </div>

          <div className="row">

            <div className="col-md-3">
              <div class="px-3 py-4 ">
                <FaDollarSign className="icon" size={90}/>
                <h5 class="card-h fw-bold my-4 ">$BUSD Rewards</h5>
                <p class="fw-bold">
                  Earn automatic Binance pegged USD ($BUSD), rewards by holding
                  your Halloween Floki Coin – 4% of every buy, transfer and sell
                  transaction is redistributed automatically to $FLOH holders.
                  You will receive the rewards automatically in your wallet or
                  claim your rewards manually in our upcoming reward app
                  tracker.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div class="px-3 py-4 ">
              <FaBullhorn className="icon" size={90}/>
                <h5 class="card-h fw-bold my-4">$BUSD Rewards</h5>
                <p class="fw-bold">
                  Earn automatic Binance pegged USD ($BUSD), rewards by holding
                  your Halloween Floki Coin – 4% of every buy, transfer and sell
                  transaction is redistributed automatically to $FLOH holders.
                  You will receive the rewards automatically in your wallet or
                  claim your rewards manually in our upcoming reward app
                  tracker.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div class=" px-3 py-4">
              <FaWater className="icon" size={90}/>
                <h5 class="card-h fw-bold my-4">$BUSD Rewards</h5>
                <p class="fw-bold">
                  Earn automatic Binance pegged USD ($BUSD), rewards by holding
                  your Halloween Floki Coin – 4% of every buy, transfer and sell
                  transaction is redistributed automatically to $FLOH holders.
                  You will receive the rewards automatically in your wallet or
                  claim your rewards manually in our upcoming reward app
                  tracker.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div class="px-3 py-4 ">
              <FaUserShield className="icon" size={90}/>
                <h5 class="card-h fw-bold my-4">$BUSD Rewards</h5>
                <p class="fw-bold">
                  Earn automatic Binance pegged USD ($BUSD), rewards by holding
                  your Halloween Floki Coin – 4% of every buy, transfer and sell
                  transaction is redistributed automatically to $FLOH holders.
                  You will receive the rewards automatically in your wallet or
                  claim your rewards manually in our upcoming reward app
                  tracker.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Secondcomp;
