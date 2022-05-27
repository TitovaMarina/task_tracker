import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApolloClient } from '@apollo/client';
import styled from 'styled-components';

import useAuthUser from '../globals/AuthUser';
import useCreateProject from '../hooks_mutations/useCreateProject';
import useRemoveProject from '../hooks_mutations/useRemoveProject';

import Button from '@mui/material/Button';
import DefaultLayout from "../components/defaultLayout";
import Card from "../components/card";
import CreateCard from "../components/createCard";

const StyledCardBox = styled.div`
  margin: 10px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

  const { create, loading, error } = useCreateProject();
  const { remove } = useRemoveProject();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <DefaultLayout title="Home page" button={<Button variant="outlined" onClick={handleLogoutClick}>Log out</Button>}>
      <StyledCardBox>
        <CreateCard open={open} handleOpen={handleOpen} handleClose={handleClose} entity="project" handleLogoutClick={handleLogoutClick} createRequest={create} isLoading={loading} error={error} />
        {user?.projects?.map((project)=>(
          <Card
            id={project.id}
            name={project.name}
            onRemoveClick={remove}
          />
        ))}
      </StyledCardBox>


    </DefaultLayout>
  );
}

export default Home;
