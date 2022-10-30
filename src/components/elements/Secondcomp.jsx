import React from "react";
import {
  FaDollarSign,
  FaBullhorn,
  FaWater,
  FaUserShield,
} from "react-icons/fa";
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
                At Halloween Floki, we are designing a project based on
                definitive market rules and fundamental economic principles.
                Halloween Floki reconciles a high-performance protocol with
                integral price stability features.
              </p>
              <p className=" mb-5">Total Sudopply: 1 000 000 000 000 FLOH</p>
              <p className=" mb-5">8% Buy and Sell Tax:</p>
              <ul>
                <li className="mb-1">
                  4% holders rewards: Dividend tax on all transactions that will
                  be distributed every 24 hours to holders in BUSD.
                </li>
                <li className="mb-1">
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
              <p className="fw-bold mt-4"> WHAT ARE OUR FEATURES</p>
            </div>
          </div>
          
          
          
          

          <div className="row">
            <div className="col-md-3 col-lg-3">
              <div class="card s-card">
                <div class="card-body">
                <FaDollarSign className="icon" size={90} />
                  <h3 class="card-title mt-4 mb-3">$BUSD Rewards </h3>
                  <p class="card-text">
                    Earn automatic Binance pegged USD ($BUSD), rewards by
                    holding your Halloween Floki Coin – 4% of every buy,
                    transfer and sell transaction is redistributed automatically
                    to $FLOH holders. You will receive the rewards automatically
                    in your wallet or claim your rewards manually in our
                    upcoming reward app tracker.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-lg-3">
              <div class="card s-card">
                <div class="card-body">
                <FaBullhorn className="icon" size={90} />
                  <h3 class="card-title mt-4 mb-3">Marketing </h3>
                  <p class="card-text">
                    3% of every transaction will directly go to the marketing
                    wallet in order to ensure an increase in exposure throughout
                    advertisement platforms, social media and to secure
                    contracts and deals with influencers. This will help FLOH
                    achieve an international status and to be known within every
                    community!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-lg-3">
              <div class="card s-card">
                <div class="card-body">
                <FaWater className="icon" size={90} />
                  <h3 class="card-title mt-4 mb-3">Liquidity Pool</h3>
                  <p class="card-text">
                    Our Smart contract deposits 1% from every transaction as
                    $FLOH and $BNB into a liquidity pool which has been locked
                    and certified. Pancakeswap fixes the low liquidity problems
                    of DEXs through their Liquidity Pools, ensuring traders can
                    always Buy & Sell without liquidity issues. A bigger
                    liquidity pool will provide more stability to the $FLOH
                    price.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-lg-3">
              <div class="card s-card">
                <div class="card-body">
                <FaUserShield className="icon" size={90} />
                  <h3 class="card-title mt-4 mb-3">Anti-Whale Mechanism</h3>
                  <p class="card-text">
                    Our Anti-Whale mechanism ensures that no single transaction
                    order can amount to more than 1% of the total supply of
                    $FLOH. The Anti-Whale Mechanism won’t necessarily stop
                    whales from selling, but having a maximum limit helps to
                    prevent large selloffs and price manipulation.
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

export default Secondcomp;
