import { useEffect, useRef, useState } from "react";
import MyPicture from "../images/dinkdonk.gif";

const WhoAmI = () => {
  const [width, setWidth] = useState(0);
  const initialSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialSection.current != undefined) {
      setWidth(initialSection.current.offsetWidth);
      console.log(width);
    }
  }, [width]);

  return (
    <div ref={initialSection} className="section">
      <div
        style={{
          display: "flex",
          flexFlow: "row",
        }}
      >
        <div style={{ marginRight: "50px" }}>
          <img src={MyPicture}></img>
        </div>
        <div>
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

      <div
        className="sliding-part"
        style={{
          display: "flex",
          flexFlow: "row",
          left: width + 0 + "px",
          position: "absolute",
        }}
      >
        <div style={{ marginRight: "50px" }}>
          <img src={MyPicture}></img>
        </div>
        <div>
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
    </div>
  );
};

export default WhoAmI;
