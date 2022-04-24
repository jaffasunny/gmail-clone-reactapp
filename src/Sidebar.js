import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import SidebarOption from "./SidebarOption";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Button startIcon={<Add fontSize='large' />} className='sidebar__compose'>
        Compose
      </Button>

      <SidebarOption Icon={Inbox} title='Inbox' number={54} selected={true} />
      <SidebarOption Icon={Star} title='Starred' number={54} />
      <SidebarOption Icon={AccessTime} title='Snoozed' number={54} />
      <SidebarOption Icon={LabelImportant} title='Starred' number={54} />
      <SidebarOption Icon={NearMe} title='sent' number={54} />
      <SidebarOption Icon={Note} title='Drafts' number={54} />
      <SidebarOption Icon={ExpandMore} title='More' number={54} />

      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
