import React, { useState } from "react";
import styled from 'styled-components';
import Form from "../components/form";
import DefaultLayout from "../components/defaultLayout";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const StyledLink = styled.a`
  margin-left: 5px;
  text-decoration: none;
  :hover{
    text-decoration: underline;
  }
`
const initialLoginState = {login: "", password: "" };


const Login = () => {

  const [formState, setFormState] = useState(initialLoginState);

  const formHandlers = (event) => {
    const { value, id} = event.target;
    setFormState({...formState, [id]: event.type === "change" ? value : value.trim()});
  }

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
          <Button variant="contained" fullWidth>Sign in</Button>
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
          Don't have an account? <StyledLink href="">Register</StyledLink>
        </Box>



      </Form>
    </DefaultLayout>
  );
}

export default Login;
