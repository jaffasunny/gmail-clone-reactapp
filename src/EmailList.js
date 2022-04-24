import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import Section from "./Section";

import "./EmailList.css";
import EmailRow from "./EmailRow";

const EmailList = () => {
  return (
    <div className='emailList'>
      <div className='emailList__settings'>
        <div className='emailList__settingsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className='emailList__settingsRight'>
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className='emailList__sections'>
        <Section Icon={Inbox} title='primary' color='red' selected />
        <Section Icon={People} title='Social' color='#1A73E8' />
        <Section Icon={LocalOffer} title='Promotions' color='green' />
      </div>

      <div className='emailList__List'>
        <EmailRow
          title='Twitch'
          subject='Hey fellow streamer'
          description='This is a test'
          time='10pm'
        />
        <EmailRow
          title='Twitch'
          subject='Hey fellow streamer'
          description='This is a test'
          time='10pm'
        />
      </div>
    </div>
  );
};

export default EmailList;
