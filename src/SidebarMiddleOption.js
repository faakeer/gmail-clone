import React from "react";
import "./SidebarMiddleOption.css";

const SidebarMiddleOption = ({ Icon, title }) => {
  return (
    <div className="sidebarMiddleOption">
      <Icon />
      <h3>{title}</h3>
    </div>
  );
};

export default SidebarMiddleOption;
