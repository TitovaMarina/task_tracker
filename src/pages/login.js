import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useApolloClient } from '@apollo/client';

import useAuthUser from '../globals/AuthUser';
import signIn from '../api/mutations/signIn';

import Form from "../components/form";
import Link from "../components/link";
import DefaultLayout from "../components/defaultLayout";

const initialLoginState = { login: "", password: "" };
const REGISTER_LINK_TEXT = "Don't have an account?"

const Login = () => {
  const [formState, setFormState] = useState(initialLoginState);

  const { user, isLoading } = useAuthUser();
	const client = useApolloClient();
	const handleSignIn = async (event) => {
		event.preventDefault();
			await signIn(client, formState);
	};

  const formHandlers = (event) => {
    const { value, id } = event.target;
    setFormState({...formState, [id]: event.type === "change" ? value : value.trim()});
  }

  const navigate = useNavigate();
	useEffect(() => {
		if (isLoading === false && user) {
			navigate('/', { replace: true });
		}
	}, [isLoading, user]);

  return(
    <DefaultLayout title="Login page">
      <Form>
        <Box mb="10px">
          <TextField label="Login" id="login" value={formState.login} onChange={formHandlers} onBlur={formHandlers} fullWidth />
        </Box>
        <Box mb="10px">
          <TextField label="Password" id="password" value={formState.password} onChange={formHandlers} onBlur={formHandlers} fullWidth />
        </Box>

        <Box mb="10px">
          <Button variant="contained" onClick={handleSignIn} fullWidth>Sign in</Button>
        </Box>
        <Box fullWidth sx={{
          height: '30px',
          border: '1px solid #767676 ' ,
          borderRadius: '5px',
          p: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '15px'
        }}>
          {REGISTER_LINK_TEXT}<Link to={"/register"}>Register</Link>
        </Box>
      </Form>
    </DefaultLayout>
  );
}

export default Login;
