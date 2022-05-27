import React, { useState } from 'react';

import styled from 'styled-components';
import ModalWindow from '../modalWindow';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import Form from '../form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'white',
  border: '2px solid #1976d2',
  boxShadow: 24,
  p: 4,
};

const StyledCreateCardButton = styled.button`
  margin: 10px;
  height: 95px;
  min-width: 230px;
  width: 250px;
  border-radius: 8px;
  border: 2px solid #4CAF50;
  :hover {
  background-color: #4CAF50; /* Green */
  color: white;
  }
`

const StyledTitle = styled.h1`

  font-size: 18px;
`

const INITIAL_FORM_STATE = { name: '', description: '' };

const CreateCard = ({ open,handleOpen, handleClose, entity, handleLogoutClick, createRequest, isLoading, error }) => {

  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  const handleEvents = (event) => {
    const { value, id } = event.target;
    setFormState({...formState, [id]: event.type === "change" ? value : value.trim()});
  }
  const handleCreateClick = async (event) => {
		event.preventDefault();

		await createRequest(formState.name, formState.description);
		setFormState(INITIAL_FORM_STATE);
	};

  return(
    <div>
      <StyledCreateCardButton onClick={handleOpen}>
          <StyledTitle>Create new project</StyledTitle>
      </StyledCreateCardButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create new project
          </Typography>

            <Box mb="10px">
              <TextField id="name" label="Name*" margin='dense'  value={formState.name} onChange={handleEvents} onBlur={handleEvents} fullWidth />
            </Box>
            <Box mb="10px">
              <TextField id="description" label="Description" margin='dense' value={formState.description} onChange={handleEvents} onBlur={handleEvents} fullWidth />
            </Box>
            <Button type="submit" variant="contained" onClick={(event) => handleCreateClick(event)} disabled={formState.name.trim() === ''}>
              Create
            </Button>

        </Box>
      </Modal>

      {/* <ModalWindow
        open={open}
        onClose={handleClose} >

      </ModalWindow> */}

    </div>

  );
}

export default CreateCard;
