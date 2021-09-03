import React from "react";
import "./SidebarMiddle.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import SidebarMiddleOption from "./SidebarMiddleOption";
import KeyboardIcon from "@material-ui/icons/Keyboard";

const SidebarMiddle = () => {
  return (
    <div className="sidebarMiddle">
      <SidebarMiddleOption Icon={VideocamIcon} title="New meeting" />
      <SidebarMiddleOption Icon={KeyboardIcon} title="Join a meeting" />
    </div>
  );
};

export default SidebarMiddle;
