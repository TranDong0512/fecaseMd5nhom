import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AdminGetBlogs} from "../../../service/adminService";

function ListBlogAdmin(props) {
    const dispatch = useDispatch()
    const blogs = useSelector(state => {
        console.log(state.admin.currentAdmin[0])
        return state.admin.currentAdmin
    })

    useEffect(() => {
        dispatch(AdminGetBlogs())
    },[])
    return (
        <div className="row">
            <div className="col-12" style={{marginTop: '6em'}}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>Title</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {blogs.map((blog,index)=>(
                        <tr>
                            <th>{index+1}</th>
                            <td>{blog.id}</td>
                            <td>{blog.username}</td>
                            <td>{blog.tittle}</td>
                            <td>{blog.time.split("",10)}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default ListBlogAdmin;