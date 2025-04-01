import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

export default function DeleteModal({ openDelete, handleCloseDelete, deleteItem}) {
  return (
    <Dialog 
    open={openDelete} 
    onClose={handleCloseDelete}>
      <DialogTitle>Delete Item</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to delete this item?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDelete} color="primary">
          Cancel
        </Button>
        <Button
          color="error"
          onClick={deleteItem}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
