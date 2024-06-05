import { useEffect, useRef, useState } from "react";
import "../components/WhoAmI.css";
import MyPicture from "../images/dinkdonk.gif";
import BackIcon from "../icons/MUI_Arrow_Back.svg";

const WhoAmI = () => {
  const initialSection = useRef<HTMLDivElement>(null);
  const slidingSection = useRef<HTMLDivElement>(null);
  const sectionToggleButton = useRef<HTMLButtonElement>(null);

  return (
    <div ref={initialSection} className="section">
      <div style={{ width: "100%", display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexFlow: "row",
            margin: "auto",
            minWidth: "500px",
            width: "50%",
          }}
        >
          <div style={{ marginRight: "50px" }}>
            <img src={MyPicture}></img>
          </div>
          <div style={{ width: "100%" }}>
            <div>Who am I?</div>
            <div>
              <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <button
            ref={sectionToggleButton}
            className="button"
            style={{
              position: "absolute",
              right: "0px",
              zIndex: "2",
            }}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              if (!slidingSection.current!.classList.contains("show")) {
                slidingSection.current!.classList.add("show");
              } else {
                slidingSection.current!.classList.remove("show");
              }
            }}
          >
            <img src={BackIcon}></img>
          </button>
        </div>
      </div>
      <div ref={slidingSection} className="sliding-part">
        {/* <div style={{ marginRight: "50px" }}>
          <img src={MyPicture}></img>
        </div> */}
        <div>
          <div>My Qualifications!</div>
          <div>
            <ul>
              <li>I </li>
              <li>Graduated</li>
              <li>University</li>
              <li>Bachelors</li>
              <li>I</li>
              <li>Promise</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
