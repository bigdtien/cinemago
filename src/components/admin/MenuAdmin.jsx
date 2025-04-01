import React, { useState } from 'react';
import logo from "../../assets/logo.png"
import { MdOutlineDashboard } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { listMenu } from '../../utils/Contants';
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

function MenuAdmin(props) {
    const [showItem, setShowItem] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const handleItem = (id) => {
        if (id == showItem) {
            setShowItem(null);
        } else {
            setShowItem(id); c
        }
    }
    return (
        <div className='bg-radial-[at_25%_25%] from-white to-zinc-900 to-95% p-4 lg:h-screen'>
            <div className='flex items-center gap-1.5 p-3'>
                <FaList onClick={() => setShowMenu(!showMenu)} />
                    <div className='flex-1'>
                       {showMenu && <img className='w-30 h-15 m-auto' src={logo} alt="" />}
                    </div>
            </div>
            <div className={showMenu ? "" :'max-lg:hidden' }>
            <Link to={"/"} className=' flex items-center gap-1.5 p-3 hover:bg-black hover:text-white'>
                <MdOutlineDashboard />
                {showMenu && <p>Dashboard</p>}
            </Link>
            <div className=''>
                {showMenu && <b>UI Elements</b>}
            </div>
            <Link to={"/categories"} className=' flex items-center gap-1.5 p-3 hover:bg-black hover:text-white'>
                <TbCategoryFilled />
                {showMenu && <p>Categories</p>}
            </Link>
            <div className=''>
                {showMenu && <b>Forms and Datas</b>}
            </div>
            <div>
                {
                    listMenu.map(e => (
                        <div>
                            <div onClick={() => handleItem(e.id)} className='flex gap-1.5 items-center justify-between p-3 hover:bg-black hover:text-white'>
                               {e.icon}
                                {showMenu && <p>{e.title}</p>}
                                {showItem === e.id ? <FaArrowAltCircleDown /> :   <FaArrowAltCircleRight /> }                  
                            </div>
                            {showItem === e.id && <div>
                                {
                                    e.items.map((b, index) => (
                                        <Link to={b.path} className='flex gap-2 items-center p-1 hover:text-white hover:bg-zinc-500'>
                                            <MdArrowForwardIos /> <p>{b.name}</p> 
                                        </Link>
                                    ))
                                }
                            </div>}

                        </div>
                    ))
                }   
            </div>
            </div>
        </div>
    );
}

export default MenuAdmin;