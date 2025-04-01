import React, { useState } from 'react';
import user from "../../assets/user.png";
import { FaSearch } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoMailOpen } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

function HeaderAdmin(props) {
    const [IconStatus, setIconStatus] = useState(false)
    const [showUser, setShowUser] = useState (false);
    return (
        <div className='flex justify-between p-3 items-center '>
            <div>
                <h1 className='text-2xl'>
                    Good Morning ! <b> Admin </b>
                </h1>
                <p>
                    Your predormance sumary this week
                </p>
            </div>
            <div className='flex gap-3 items-center'>
                <div>
                    <FaSearch />
                </div>
                <div onClick={() => setIconStatus(!IconStatus)}>
                    {IconStatus ? <IoMailOpen /> : <IoMail />}
                </div>
                <div>
                    <FaBell />
                </div>
                <div onClick={() => setShowUser(!showUser)} className='relative' >
                    <img src={user} alt="" className='w-8 h-8 rounded-full' />
                    {showUser && <div className='p-3 bg-gray-500 text-white absolute right-3 rounded-lg'>
                        <div className=' hover:text-red-400 p-1'>Admin</div>
                        <div className=' hover:text-red-400 p-1'>Profile</div>
                        <div className=' hover:text-red-400 p-1'>Logout</div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default HeaderAdmin;