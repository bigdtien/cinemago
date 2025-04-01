import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { addDocument, updateDocument } from '../../../../reponsitory/firebaseReponse';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

export default function ModalAuthors({ author, handleClose, open, setAuthor, setError, error, title }) {

  const onchangInput = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value });
  };

  const validation = () => {
      const newError = {} ;
      newError.name = author.name ? "" : "Please enter name" ;
      newError.description = author.description ? "" : "Please enter description";
      setError(newError);
      return Object.values(newError).every(e => e === "");
  }

  const handleAdd = async () => {
    if(!validation()) {
       return;
    }
    author.id ? updateDocument("authors", author) : await addDocument("authors", author);
    handleClose();
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {
              author.id ? "Edit Author" :  "Add Author"
            }
           
          </Typography>
          <TextField
            label="Author Name"
            variant="outlined"
            fullWidth
            name="name"
            value={author.name}
            onChange={onchangInput}
            sx={{ marginBottom: 2 }}
            error={!!error.name}
            helperText={error.name}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            name="description"
            value={author.description}
            onChange={onchangInput}
            sx={{ marginBottom: 2 }}
            error={!!error.description}
            helperText={error.description}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAdd}
            sx={{ alignSelf: 'flex-end' }}
          >
            {
              author.id ? "Edit Author" : "Add Auhor"
            }
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
