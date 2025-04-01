import React, { useState } from 'react';
import NavBarAdmin from '../../../components/admin/NavBarAdmin';
import TableCategories from './TableCategories';
import ModalCategories from './ModalCategories';
import DeleteModal from '../../../components/admin/DeleteModal';
import { deleteDocument } from '../../../reponsitory/firebaseReponse';

const inner = {name: "", description: ""};
function Categories(props) {
    const [category, setCategory] = useState(inner);
    const [error, setError] = useState(inner);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        setCategory(inner);
    };
    const handleClose = () => setOpen(false);
    const [openDelete, setOpenDelete] = useState(false);
    const handleCloseDelete = () => setOpenDelete(false);
    const handleEdit = (row) => {
        setOpen(true);
        setCategory(row);
    }
    const handleOpenDelete = (row) => {
        setOpenDelete(true);
        setCategory(row);
    };
    const deleteItem = () => {
            deleteDocument("categories",category);
            handleCloseDelete();
        };

    return (
        <div className='p-4'>
            <NavBarAdmin handleOpen={handleOpen} title={"Categories"}/>
            <TableCategories handleEdit={handleEdit} handleOpenDelete={handleOpenDelete}/>
            <DeleteModal deleteItem={deleteItem}  openDelete={openDelete} handleCloseDelete={handleCloseDelete }/>
            <ModalCategories  error={error} setError={setError} setCategory={setCategory} category={category} handleClose={handleClose} open={open}/>
        </div>
    );
}

export default Categories;