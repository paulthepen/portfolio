import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, {useEffect, useRef} from "react";
import '../css/LogoHolder.css';

const LogoHolder = ({ img='', logo='', title }) => {
    const content = useRef(null);

    useEffect(() => {
      const currentHeight = content.current.offsetHeight;
      const currentWidth = content.current.offsetWidth;
      content.current.style.top="calc(50% - " + currentHeight/2 + "px)";
      content.current.style.left="calc(50% - " + currentWidth/2 + "px)";
    }, []);

    return (
      <div id={title}>
        <div className="bottom-left hex-border"></div>
        <div className="bottom-right hex-border"></div>
        <div className="top-right hex-border"></div>
        <div className="top-left hex-border"></div>
        <svg width="100px" height="100px" className="svg-border">
          <polygon points="50,1 99,27.5 99,72.5 50,99 1,72.5 1,27.5" style={{fill:'none', stroke:"black", strokeWidth: 2}} />
        </svg>
        <div ref={content} className="hexagon-content text-center">
          About
        </div>
      </div>
  );
};

export default LogoHolder;
