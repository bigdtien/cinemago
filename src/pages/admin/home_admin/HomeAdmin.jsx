import React from 'react';
import MenuAdmin from '../../../components/admin/MenuAdmin';
import HeaderAdmin from '../../../components/admin/HeaderAdmin';
import AdminRouters from '../../../routes/AdminRouters'
function HomeAdmin(props) {
    return (
        <div className='lg:flex'>
               <MenuAdmin />
               <div className='flex-1'>
                  <HeaderAdmin />
                  <AdminRouters />
               </div>
        </div>
    );
}

export default HomeAdmin;