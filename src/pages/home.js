import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApolloClient } from '@apollo/client';

import useAuthUser from '../globals/AuthUser';

import styled from 'styled-components';
import Button from '@mui/material/Button';

import DefaultLayout from "../components/defaultLayout";
import Card from "../components/card";

const StyledCardBox = styled.div`
  margin: 10px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const StyledCardContainer = styled.button`
  margin: 10px;
  height: 95px;
  min-width: 230px;
  width: 250px;

  /* border: 1px solid #cccccc;
  border-radius: 10px;
  background-color: #e2e2e2; */
`

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const openModel = () => {
    setShowModal(prev => !prev)
  }

  const { user, isLoading } = useAuthUser();
	const client = useApolloClient();

  const navigate = useNavigate();
  const handleLogoutClick = async () => {
		localStorage.clear();
		await client.clearStore();
		navigate('/login');
	};

  useEffect(() => {
		if (isLoading === false && !user) {
			navigate('/login');
		}
	}, [user, isLoading]);

  return(
    <DefaultLayout title="Home page">
      <StyledCardBox>
        <StyledCardContainer>+</StyledCardContainer>
        <Card title="1st card"></Card>
        <Card title="2nd card"></Card>
        <Card title="3d card"></Card>
        <Card title="4th card"></Card>
      </StyledCardBox>

      <Button variant="outlined" onClick={handleLogoutClick}>Log out</Button>
    </DefaultLayout>
  );
}

export default Home;
