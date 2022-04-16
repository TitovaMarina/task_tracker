import React from "react";
import Form from "../components/form";
import DefaultLayout from "../components/defaultLayout";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Register = () => {

  return(
    <DefaultLayout title="Registration page">
      <Form>
        <Box mb="10px">
          <TextField label="Login" id="loginInput" fullWidth />
        </Box>
        <Box mb="10px">
          <TextField label="Password" id="loginInput" fullWidth />
        </Box>

        <Button variant="contained" fullWidth>Register</Button>
      </Form>
    </DefaultLayout>
  );
}

export default Register;
