import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,

  border: '2px solid #1976d2',
  boxShadow: 24,
  p: 4,
};

const INITIAL_FORM_STATE = { name: '', description: '' };

const ModalWindow = ( {open, handleClose, showModal, setShowModal, entity, handleLogoutClick, createRequest, isLoading, error } ) => {

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


  return (

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
        <TextField id="name" label="Name*" margin='dense' fullWidth value={formState.name} onChange={handleEvents} onBlur={handleEvents} required />

        <TextField id="description" label="Description" margin='dense' fullWidth value={formState.description} onChange={handleEvents} onBlur={handleEvents} />

      </Box>
    </Modal>
  );
}

export default ModalWindow;
