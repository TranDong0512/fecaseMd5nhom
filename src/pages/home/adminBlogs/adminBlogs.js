import React from 'react';
import {Outlet} from "react-router-dom";
import NavbarAdmin from "../../../component/NavbarAdmin";
import ListUserAdmin from "./listUser";
import ListBlogAmin from "./listBlog";

function AdminBlogs(props) {



    return (
        <div>
            <div className='row'>
              <div className="col-12">
                  <NavbarAdmin></NavbarAdmin>
              </div>
                <div className="col-12">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}

export default AdminBlogs;