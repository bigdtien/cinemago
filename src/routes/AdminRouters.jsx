import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import Categories from '../pages/admin/categories/Categories';
import Actors from '../pages/admin/cast_and_crew/actors/Actors';
import Authors from '../pages/admin/cast_and_crew/authors/Authors';
import Characters from '../pages/admin/cast_and_crew/characters/Characters';
import Movie from '../pages/admin/media_management/movie/Movie';
import MovieScreening from '../pages/admin/media_management/movie_screening/MovieScreening';
import Cinema from '../pages/admin/region/cinema/Cinema';
import Locations from '../pages/admin/region/locations/Locations';
import Regions from '../pages/admin/region/regions/Regions';
import Chairs from '../pages/admin/seating/chairs/Chairs';
import Rooms from '../pages/admin/seating/rooms/Rooms';
import Food from '../pages/admin/service/food/Food';
import OrderDetails from '../pages/admin/service/order_details/OrderDetails'
import Tickets from '../pages/admin/service/tickets/Tickets';

function AdminRouters(props) {

    const routers = [
        {path: "/", Component : <Dashboard/>},
        {path: "/categories", Component : <Categories />},
        {path: "/actors", Component : <Actors/>},
        {path: "/authors", Component : <Authors/>},
        {path: "/characters",Component : <Characters />},
        {path: "/movie",Component : <Movie />},
        {path: "/moviescreening",Component : <MovieScreening />},
        {path: "/cinema",Component : <Cinema />},
        {path: "/locations",Component : <Locations />},
        {path: "/regions",Component : <Regions />},
        {path: "/chairs",Component : <Chairs />},
        {path: "/rooms",Component : <Rooms />},
        {path: "/food",Component : <Food />},
        {path: "/orderdetails",Component : <OrderDetails />},
        {path: "/tickets",Component : <Tickets />}
    ]
    return (
        <div>
            <Routes>
                {
                    routers.map((value, index) => (
                        <Route key={index} path={value.path} element={value.Component}/>
                    ))
                }
            </Routes>
          

          
        </div>
    );
}

export default AdminRouters;