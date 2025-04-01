import { Button, InputAdornment, TextField } from '@mui/material';
import { FaSearch } from "react-icons/fa";
import React from 'react';
import { IoMdAdd } from "react-icons/io";
function NavBarAdmin({handleOpen, title, handleSearch}) {
    return (
        <div className='flex justify-between items-center mb-4'>
            <div className='text-2xl'>
                <b>List {title}</b>
            </div>
            <div className='flex items-center gap-2 '>
                <TextField
                onChange={handleSearch}
                    variant="outlined"
                    placeholder="Tìm kiếm..."
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FaSearch />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                 onClick={handleOpen}
                    size="large"  // Keep the same size as the TextField for alignment
                    variant="contained" 
                    sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'gray', color: 'black'} }}
                >
                 <IoMdAdd className='text-4xl mr-1' />   <b>ADD</b>
                </Button>
            </div>
        </div>
    );
}

export default NavBarAdmin;