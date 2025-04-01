import React, { useState } from 'react';
import NavBarAdmin from '../../../../components/admin/NavBarAdmin';
import DeleteModal from '../../../../components/admin/DeleteModal';
import ModalAuthors from './ModalAuthors';
import TableAuthors from '../authors/TableAuthors';
import { deleteDocument } from '../../../../reponsitory/firebaseReponse';

const inner = { name: "", description: "" };
function Authors(props) {

    const [author, setAuthor] = useState(inner);
    const [error, setError] = useState(inner);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleOpen = () => {
        setOpen(true);
        setAuthor(inner);
        setError(inner);
    } ;
    const handleClose = () => setOpen(false);
    const [openDelete, setOpenDelete] = useState(false);
    const handleCloseDelete = () => setOpenDelete(false);
    const handleOpenDelete = (row) => {
        setOpenDelete(true);
        setAuthor(row);
    };
    const handleEdit = (row) => {
        setOpen(true);
        setAuthor(row);
        setError(inner);
    };
    const deleteItem = () => {
        deleteDocument("authors",author);
        handleCloseDelete();
    };

    return (
        <div className='p-4'>
            <NavBarAdmin handleSearch={handleSearch} title={"Authors"} handleOpen={handleOpen}/>
            <DeleteModal deleteItem={deleteItem}  openDelete={openDelete} handleCloseDelete={handleCloseDelete } />
            <ModalAuthors author={author} setAuthor={setAuthor} error={error} setError={setError} open={open} handleClose={handleClose}/>
            <TableAuthors search={search} handleEdit={handleEdit} handleOpenDelete={handleOpenDelete}/>
        </div>
    );
}

export default Authors;