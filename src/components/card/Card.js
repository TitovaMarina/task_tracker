import React from "react";
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Description } from "@mui/icons-material";

const StyledCardContainer = styled.div`
  margin: 10px;
  height: 95px;
  min-width: 230px;
  width: 250px;
  display: flex;
  flex-direction: column;
  border: 1px solid #cccccc;
  border-radius: 10px;
  background-color: #aefcaa;
`
const StyledTitle = styled.h1`
  color: black;
  font-size: 18px;
  text-align: end;
`

const Card = ({ id, name, onRemoveClick, onUpdateClick }) => {

  const removeClick = () => {
		onRemoveClick(id);
	};


  return(
      <StyledCardContainer>
          <Box
          sx={{
            p:'5px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
          >
          {/* <IconButton color="primary" aria-label="edit" component="span">
            <EditIcon />
          </IconButton> */}
          <IconButton color="primary" aria-label="delete" component="span" onClick={removeClick}>
            <DeleteIcon />
          </IconButton>
        </Box>


        <Box p="10px" justifyContent="flex-end" >
          <StyledTitle>
            {name}
          </StyledTitle>
        </Box>

      </StyledCardContainer>

  );
}

export default Card;
