import React from 'react';
import NavBarAdmin from '../../../../components/admin/NavBarAdmin';
import TableActors from '../actors/TableActors';
function Actors(props) {
    return (
        <div>
            <NavBarAdmin title={"Actors"} />
            <TableActors />
        </div>
    );
}

export default Actors;