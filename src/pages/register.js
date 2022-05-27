import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/form";
import DefaultLayout from "../components/defaultLayout";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const initialRegisterFormState = { name: "", lastName: "", phone: "", login: "", password: "" };

const Register = () => {

  const [formState, setFormState] = useState(initialRegisterFormState);

  const formHandlers = (event) => {
    const { value, id } = event.target;
    setFormState({...formState, [id]: event.type === "change" ? value : value.trim()});
  }

  const navigate = useNavigate();
  const routeChange = () =>{
    let path = `/`;
    navigate(path);
  }
  return(
    <DefaultLayout title="Registration page">
      <Form>
        <Box mb="10px">
          <TextField label="Name" id="name" value={formState.name} onChange={formHandlers} onBlur={formHandlers} fullWidth />
        </Box>
        <Box mb="10px">
          <TextField label="Last Name" id="lastName" value={formState.lastName} onChange={formHandlers} onBlur={formHandlers} fullWidth />
        </Box>
        <Box mb="10px">
          <TextField label="phone" id="phone" value={formState.phone} onChange={formHandlers} onBlur={formHandlers} fullWidth />
        </Box>
        <Box mb="10px">
          <TextField label="Login" id="login" value={formState.login} onChange={formHandlers} onBlur={formHandlers} fullWidth />
        </Box>
        <Box mb="10px">
          <TextField label="Password" id="password" value={formState.password} onChange={formHandlers} onBlur={formHandlers} fullWidth />
        </Box>

        <Button mb="10px" variant="contained" fullWidth>Register</Button>

        <Button variant="outlined" onClick={routeChange}>Log in</Button>
      </Form>
    </DefaultLayout>
  );
}

export default Register;
