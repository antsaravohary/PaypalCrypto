import React from "react";
import "./Crypto.css";
import fleche from "./fleche.png";
import RealTimeData from "./Data/RealTimeData";
import { Tabs } from "../../Tab/Tabs";

const Crypto = () => {
  const clickUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="data">
      <RealTimeData />
      <div className="bouton" onClick={clickUp}>
        <img src={fleche} alt="UptoNavBar" className="icone" />
      </div>
      <Tabs />
    </div>
  );
};
export default Crypto;
