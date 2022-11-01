import React from "react";
import "./thirdcomp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegCircle } from "react-icons/fa";

const Thirdcomp = () => {
  return (
    <>
    <div className="roadmap" id="roadmap">
    <div className="container my-5 ">
        <p className="text-center fw-bold">ROADMAP</p>
        <h3 className="text-center fw-bold third-top">Our Plan</h3>

        <div className="row">
          <div className="col">
            <VerticalTimeline lineColor="white">
              <VerticalTimelineElement
                className="vertical-timeline-element text-dark"
                iconStyle={{ background: "#FE5E00FF", color: "white" }}
                icon={<FaRegCircle />}
              >
                <h1>Phase 1</h1>
                <ul className="roadmap-list-square">
                  <li>Team Expansion</li>
                  <li>Social Media and Community Integration</li>
                  <li>Contract Creation</li>
                  <li>Website Deployment</li>
                  <li>Audit & KYC</li>
                </ul>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element text-dark"
                iconStyle={{ background: "#FE5E00FF", color: "white" }}
                icon={<FaRegCircle />}
              >
                <h1>Phase 2</h1>
                <ul className="roadmap-list-square">
                  <li>Presale Whitelist Competition</li>
                  <li>Presale Marketing Campaign</li>
                  <li>Presale Launch on Pinksale</li>
                  <li>Airdrop Partnership</li>
                  <li>Foreign Communities Integration and Creation</li>
                </ul>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element text-dark"
                iconStyle={{ background: "#FE5E00FF", color: "white" }}
                icon={<FaRegCircle />}
              >
                <h1>Phase 3</h1>
                <ul className="roadmap-list-square">
                  <li>Pre-Launch Marketing Campaign</li>
                  <li>Launch on PancakeSwap</li>
                  <li>Airdrop for Migrating Holders</li>
                  <li>Reward Tracker Partnership</li>
                  <li>Farm & Staking Pools</li>
                </ul>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element text-dark"
                iconStyle={{ background: "#FE5E00FF", color: "white" }}
                icon={<FaRegCircle />}
              >
                <h1>Phase 4</h1>
                <ul className="roadmap-list-square">
                  <li>FLOH Holders Lottery</li>
                  <li>Worldwide Halloween Dog Costume Contest</li>
                  <li>CEX Listing</li>
                  <li>ETH Bridging</li>
                  <li>NFT Collection Website Integration</li>
                </ul>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element text-dark"
                iconStyle={{ background: "#FE5E00FF", color: "white" }}
                icon={<FaRegCircle />}
              >
                <h1>Phase 5</h1>
                <ul className="roadmap-list-square">
                  <li>Influencers Campaign</li>
                  <li>NFT Collection Whitelist Contest</li>
                  <li>NFT Collection Launch</li>
                  <li>Second CEX Listing</li>
                  <li>Record for a Holiday Floki Project: 30 Million Market Cap</li>
                </ul>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Thirdcomp;
