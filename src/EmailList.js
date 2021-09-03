import { IconButton, Checkbox } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import Section from "./Section";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
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
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emaiilList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="Twitch"
          subject="Hey This is a test."
          description="test mail from elonmusk lorem{20} test mail from elonmusk lorem{20} test mail from elonmusk lorem{20}"
          time="10:33 pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey This is a test."
          description="test mail from elonmusk lorem{20} test mail from elonmusk lorem{20} test mail from elonmusk lorem{20}"
          time="10:33 pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey This is a test."
          description="test mail from elonmusk lorem{20} test mail from elonmusk lorem{20} test mail from elonmusk lorem{20}"
          time="10:33 pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey This is a test."
          description="test mail from elonmusk lorem{20} test mail from elonmusk lorem{20} test mail from elonmusk lorem{20}"
          time="10:33 pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey This is a test."
          description="test mail from elonmusk lorem{20} test mail from elonmusk lorem{20} test mail from elonmusk lorem{20}"
          time="10:33 pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey This is a test."
          description="test mail from elonmusk lorem{20} test mail from elonmusk lorem{20} test mail from elonmusk lorem{20}"
          time="10:33 pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey This is a test."
          description="test mail from elonmusk lorem{20} test mail from elonmusk lorem{20} test mail from elonmusk lorem{20}"
          time="10:33 pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey This is a test."
          description="test mail from elonmusk lorem{20} test mail from elonmusk lorem{20} test mail from elonmusk lorem{20}"
          time="10:33 pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey This is a test."
          description="test mail from elonmusk lorem{20} test mail from elonmusk lorem{20} test mail from elonmusk lorem{20}"
          time="10:33 pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey This is a test."
          description="test mail from elonmusk lorem{20} test mail from elonmusk lorem{20} test mail from elonmusk lorem{20}"
          time="10:33 pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey This is a test."
          description="test mail from elonmusk lorem{20} test mail from elonmusk lorem{20} test mail from elonmusk lorem{20}"
          time="10:33 pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey This is a test."
          description="test mail from elonmusk lorem{20} test mail from elonmusk lorem{20} test mail from elonmusk lorem{20}"
          time="10:33 pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey This is a test."
          description="test mail from elonmusk lorem{20} test mail from elonmusk lorem{20} test mail from elonmusk lorem{20}"
          time="10:33 pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
