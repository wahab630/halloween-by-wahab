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
                <ul>
                  <li>Team Expansion</li>
                  <li>Social Media and Community Integration</li>
                  <li>Contract Creation</li>
                </ul>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element text-dark"
                iconStyle={{ background: "#FE5E00FF", color: "white" }}
                icon={<FaRegCircle />}
              >
                <h1>Phase 2</h1>
                <ul>
                  <li>Presale Whitelist Competition</li>
                  <li>Presale Marketing Campaign</li>
                  <li>Presale Launch on Pinksale</li>
                </ul>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element text-dark"
                iconStyle={{ background: "#FE5E00FF", color: "white" }}
                icon={<FaRegCircle />}
              >
                <h1>Phase 3</h1>
                <ul>
                  <li>Pre-Launch Marketing Campaign</li>
                  <li>Launch on PancakeSwap</li>
                  <li>Airdrop for Migrating Holders</li>
                </ul>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element text-dark"
                iconStyle={{ background: "#FE5E00FF", color: "white" }}
                icon={<FaRegCircle />}
              >
                <h1>Phase 4</h1>
                <ul>
                  <li>FLOH Holders Lottery</li>
                  <li>Worldwide Halloween Dog Costume Contest</li>
                  <li>CEX Listing</li>
                </ul>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element text-dark"
                iconStyle={{ background: "#FE5E00FF", color: "white" }}
                icon={<FaRegCircle />}
              >
                <h1>Phase 5</h1>
                <ul>
                  <li>Influencers Campaign</li>
                  <li>NFT Collection Whitelist Contest</li>
                  <li>NFT Collection Launch</li>
                </ul>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thirdcomp;
