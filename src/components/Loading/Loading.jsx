import React from "react";
import "./Loading.css";
import FullLogo from "../../assets/FullLogo.jpeg";
function Loading() {
  return (
    <div className="pv-loader-overlay">
      <div className="pv-loader-content">
        <div className="pv-loader-brand">
          <img src={FullLogo} alt="P" className="pv-loader-letter" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
