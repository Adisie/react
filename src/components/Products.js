import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './product-types/Nav';



class Products extends React.Component {
    render(){
        return (
            <div>
                <Nav />
                <Outlet />
            </div>
        )
    }
}


export default Products;