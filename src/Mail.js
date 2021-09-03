import { IconButton } from "@material-ui/core";
import React from "react";
import "./Mail.css";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import ArchiveIcon from "@material-ui/icons/Archive";
import WarningIcon from "@material-ui/icons/Warning";
import DeleteIcon from "@material-ui/icons/Delete";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LabelIcon from "@material-ui/icons/Label";
import FolderIcon from "@material-ui/icons/Folder";
import { useHistory } from "react-router-dom";
import PrintIcon from "@material-ui/icons/Print";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";

const Mail = () => {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsleft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <IconButton>
            <ArchiveIcon />
          </IconButton>
          <IconButton>
            <WarningIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <MarkunreadIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <FolderIcon />
          </IconButton>
          <IconButton>
            <LabelIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolsright">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className="mail__important" />
          <p>{selectedMail?.title}</p>
          <p className="mail__time">{selectedMail?.time}</p>
        </div>
        <div className="mail__message">
          {" "}
          <p>{selectedMail?.description}</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Mail;
