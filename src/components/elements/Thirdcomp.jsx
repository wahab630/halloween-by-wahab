import React from "react";
import "./thirdcomp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Thirdcomp = () => {
  return (
    <>
      <div className="container ">
        <p className="text-center fw-bold">ROADMAP</p>
        <h3 className="text-center fw-bold third-top">Our Plan</h3>

        <div className="row">
          <div className="col">
            <VerticalTimeline lineColor="white">
              <VerticalTimelineElement
                className="vertical-timeline-element text-dark"
                iconStyle={{ background: "brown", color: "white" }}
              >
                <h1>Phase 1</h1>
                <ul>
                  <li>Team Expansion</li>
                  <li>Social Media and Community Integration</li>
                  <li>Contract Creation</li>
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
