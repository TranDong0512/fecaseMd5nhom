import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AdminDeleteBlog, AdminGetBlogs} from "../../../service/adminService";

function ListBlogAdmin() {
    const dispatch = useDispatch()
    const blogs = useSelector(state => {
        return state.admin.currentAdmin
    })

    useEffect(() => {
        dispatch(AdminGetBlogs())
    },[])

    return (
        <div className="row">
            <div className="col-12" style={{marginTop: '6em'}}>
                <h1>List Blog</h1>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>Title</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {blogs.map((blog,index)=>(

                        <tr key={blog.id}>
                            <th>{index+1}</th>
                            <td>{blog.id}</td>
                            <td>{blog.username}</td>
                            <td>{blog.tittle}</td>
                            <td>{blog.status ==="true" ? "Active" : "Un Active"}</td>
                            <td>{blog.time.split('',10)}</td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>{
                                    dispatch(AdminDeleteBlog({id:blog.id}))
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default ListBlogAdmin;