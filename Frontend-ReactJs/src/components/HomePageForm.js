/*
    Build a form (name, email, message, submit button). The page
    must be a static website, hosted in an S3 bucket. Ensure proper field level
    validation (E.g. Please enter a name.) and action confirmation user experiences
    are properly handled.
 */

import React, { useState } from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';
import axios from 'axios';
import uuid from 'uuid';

const formApi = 'https://4d4nlf2g7k.execute-api.us-east-2.amazonaws.com/test/form';

//Imported from Material-Ui Styling the form component
const fstyle = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const HomePageForm = () => {
  //States needed for form Input
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [message, setMessage] = useState(undefined);

  //Errors if the field is emtpy or invalid input
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  //HelperText in case of error it would be shown under the box
  const [nameHelper, setNameHelper] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [messageHelper, setMessageHelper] = useState('');

  //Input Validation to submit and call api
  const checkInput = (event) => {
    event.preventDefault();
    if (typeof name === 'undefined') {
      setNameHelper('Please fill out your name!');
      setNameError(true);
      return;
    }
    if (typeof email === 'undefined') {
      setEmailHelper('Please fill out your email!');
      setEmailError(true);
      return;
    } else if (!email.match(validEmailRegex)) {
      setEmailHelper('Please input valid email!');
      setEmailError(true);
      return;
    }
    if (typeof message === 'undefined') {
      setMessageHelper('Please type your message!');
      setMessageError(true);
      return;
    }
    formApiCall();
  };

  // Function assures and calls the api function for sending an email and submitting the input
  const formApiCall = () => {
    if (
      window.confirm(`Are you sure to submit the form with the following results ?\n
      name: ${name} \n
      email: ${email} \n
      message: ${message}`)
    ) {
      console.log('Calling');
      axios
        .post(formApi, {
          USERS_ID: uuid.v4(),
          name: name,
          email: email,
          message: message,
        })
        .then((result) => {
          alert(
            `An Email has been sent to ${email} \nThe subject: "${name}"\n Message body: ${message}`
          );
        })
        .catch((e) => {
          alert('Error has occured please refresh the page and try again!');
        });
    }
  };

  /*eslint-disable */
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  /*eslint-disable */

  const formStyle = fstyle();
  return (
    <>
      <form className={formStyle.root} noValidate autoComplete="off">
        <TextField
          required
          id="standard-required"
          label="Name"
          error={nameError}
          placeholder="Plese enter your name"
          helperText={nameHelper}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          required
          id="standard-required"
          label="Email"
          error={emailError}
          placeholder="email@mkdecision.com"
          helperText={emailHelper}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div>
          <TextField
            required
            multiline
            id="filled-multiline-flexible"
            label="Message"
            error={messageError}
            variant="filled"
            placeholder="Type your message here ..."
            helperText={messageHelper}
            rows={4}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <Button onClick={(event) => checkInput(event)} variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
};

export default HomePageForm;
