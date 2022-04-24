import React from "react";

import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";

import "./SendMail.css";
import { closeSendMessage } from "./features/mailSlice";

const SendMail = () => {
  const { register, handleSubmit, watch } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <Close
          onClick={() => dispatch(closeSendMessage())}
          className='sendMail__close'
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='to'
          type='text'
          placeholder='To'
          {...register("to")}
          required
        />

        <input
          name='subject'
          type='text'
          placeholder='Subject'
          {...register("subject")}
          required
        />

        <input
          name='message'
          type='text'
          placeholder='Message...'
          className='sendMail__message'
          {...register("message")}
          required
        />

        <div className='sendMail__options'>
          <Button
            className='sendMail__send'
            variant='contained'
            color='primary'
            type='submit'>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
