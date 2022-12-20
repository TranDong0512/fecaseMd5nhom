import React from 'react';
import Navbar from "../../component/Navbar";
import {Outlet} from "react-router-dom";
import ListBlog from "./blogs/ListBlog";

function Home(props) {
return(
    <div className='row'>
        <div className='col-12'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>

    </div>
)
}

export default Home;