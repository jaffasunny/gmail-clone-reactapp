import React from "react";

import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";

import "./SendMail.css";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";

const SendMail = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp() || null,
    });
    dispatch(closeSendMessage());
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
          type='email'
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
