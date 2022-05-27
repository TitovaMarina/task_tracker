import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../components/defaultLayout";
import Card from "../components/card";
import styled from 'styled-components';
import Button from '@mui/material/Button';

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

  const navigate = useNavigate();
  const routeChange = () =>{
    let path = `/`;
    navigate(path);
  }

  const [showModal, setShowModal] = useState(false)
  const openModel = () => {
    setShowModal(prev => !prev)
  }

  return(
    <DefaultLayout title="Home page">
      <StyledCardBox>
        <StyledCardContainer>+</StyledCardContainer>
        <Card title="1st card"></Card>
        <Card title="2nd card"></Card>
        <Card title="3d card"></Card>
        <Card title="4th card"></Card>
      </StyledCardBox>

      <Button variant="outlined" onClick={routeChange}>Log out</Button>
    </DefaultLayout>
  );
}

export default Home;
