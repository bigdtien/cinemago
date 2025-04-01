import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { addDocument, updateDocument } from '../../../reponsitory/firebaseReponse';

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

export default function ModalCategories({ category,handleOpen, handleClose, open, setCategory, setError, error }) {

  const onchangInput = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const validation = () => {
      const newError = {} ;
      newError.name = category.name ? "" : "Please enter name" ;
      newError.description = category.description ? "" : "Please enter description";
      setError(newError);
      return Object.values(newError).every(e => e === "");
  }

  const handleAdd = async () => {
    if(!validation()) {
       return;
    }
    category.id ? updateDocument("categories", category)  : await addDocument("categories", category);
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
              category.id ? "EDIT CATEGORY" : "ADD CATEGORY"
            }
          </Typography>
          <TextField
            label="Category Name"
            variant="outlined"
            fullWidth
            name="name"
            value={category.name}
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
            value={category.description}
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
              category.id ? "EDIT CATEGORY" : "ADD CATEGORY"
            }
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
