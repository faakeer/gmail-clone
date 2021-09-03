import React from "react";
import "./SendMail.css";
import MinimizeIcon from "@material-ui/icons/Minimize";
import CloseIcon from "@material-ui/icons/Close";

import LaunchIcon from "@material-ui/icons/Launch";
import { Button, IconButton } from "@material-ui/core";

import TextFormatIcon from "@material-ui/icons/TextFormat";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import LinkIcon from "@material-ui/icons/Link";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import ImageIcon from "@material-ui/icons/Image";
import LockIcon from "@material-ui/icons/Lock";
import CreateIcon from "@material-ui/icons/Create";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <div className="sendMail__option">
          <MinimizeIcon className="sendMail__close" />
          <LaunchIcon className="sendMail__close" />
          <CloseIcon
            className="sendMail__close"
            onClick={() => dispatch(closeSendMessage())}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", {
            required: true,
          })}
        />

        {errors.to && <p className="sendMail__error">To is Required </p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", {
            required: true,
          })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is Required </p>
        )}
        <input
          name="message"
          className="sendMail__message"
          type="text"
          {...register("message", {
            required: true,
          })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is Required </p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
          <div className="sendMail__sendOptions">
            <IconButton>
              <TextFormatIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <AttachFileIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <LinkIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <InsertEmoticonIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <ChangeHistoryIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <ImageIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <LockIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <CreateIcon fontSize="small" />
            </IconButton>
            {/* <IconButton>
              <MoreVertIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
