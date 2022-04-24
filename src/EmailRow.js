import React from "react";
import {
  StarBorderOutlined,
  LabelImportantOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";

import { useNavigate } from "react-router-dom";

import "./EmailRow.css";

const EmailRow = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/mail")} className='emailRow'>
      <div className='emailRow__options'>
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>

      <h3 className='emailRow__title'>{title}</h3>

      <div className='emailRow__message'>
        <h4>
          {subject}{" "}
          <span className='emailRow__description'> - {description}</span>
        </h4>
      </div>

      <p className='emailRow__time'>{time}</p>
    </div>
  );
};

export default EmailRow;
