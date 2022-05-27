import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApolloClient } from '@apollo/client';

import useAuthUser from '../globals/AuthUser';
import signUp from '../api/mutations/signUp';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Form from "../components/form";
import DefaultLayout from "../components/defaultLayout";

const initialRegisterFormState = { name: "", lastName: "", email: "", password: "" };

const Register = () => {

  const [formState, setFormState] = useState(initialRegisterFormState);

  const formHandlers = (event) => {
    const { value, id } = event.target;
    setFormState({...formState, [id]: event.type === "change" ? value : value.trim()});
  }

  const { isLoading, user } = useAuthUser();
	const navigate = useNavigate();

  const routeChange = () => {
    navigate('/login', { replace: true });
  }

	const client = useApolloClient();
	const handleRegister = async (event) => {
    console.log(formState);
		event.preventDefault();
		await signUp(client, formState);
	};

  useEffect(() => {
		if (isLoading === false && user) {
			navigate('/', { replace: true });
		}
	}, [isLoading, user]);

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
          <TextField label="Email" id="email" value={formState.login} onChange={formHandlers} onBlur={formHandlers} fullWidth />
        </Box>
        <Box mb="10px">
          <TextField label="Password" id="password" value={formState.password} onChange={formHandlers} onBlur={formHandlers} fullWidth />
        </Box>

        <Button mb="10px" variant="contained" onClick={handleRegister} fullWidth>Register</Button>

        <Button variant="outlined" onClick={routeChange}>Log in</Button>
      </Form>
    </DefaultLayout>
  );
}

export default Register;
