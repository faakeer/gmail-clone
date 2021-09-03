import React from "react";
import { Button, IconButton } from "@material-ui/core";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import DeleteIcon from "@material-ui/icons/Delete";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import PhoneIcon from "@material-ui/icons/Phone";
import SidebarMiddle from "./SidebarMiddle";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={20} />
      <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number={2} />
      <SidebarOption Icon={SendIcon} title="Sent" number={32} />
      <SidebarOption Icon={DraftsIcon} title="Drafts" number={3} />
      <SidebarOption Icon={DeleteIcon} title="Trash" number={2} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />

      <hr />

      <SidebarMiddle />

      <hr />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
