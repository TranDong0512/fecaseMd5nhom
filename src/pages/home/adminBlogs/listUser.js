import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AdminDeleteUser, AdminGetUser} from "../../../service/adminService";

function ListUserAdmin() {
    let dispatch = useDispatch();

    const user = useSelector(state => {
        console.log(state.admin.currentAdmin)
        return state.admin.currentAdmin
    })

    useEffect(()=>{
        dispatch(AdminGetUser())
    },[])

    return (

            <div className="col-12" style={{marginTop:'6em'}}>
                <h1>List User</h1>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>

                    </tr>
                    </thead>
                    <tbody>
                    {user.map((item,index)=>(
                        <tr key={item?.id}>
                            <th>{item?.id}</th>
                            <td>{item?.username}</td>
                            <td>{item?.status ==="true" ? 'Active' : "UnActive"}</td>
                            <td>{item?.role}</td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>{
                                    dispatch(AdminDeleteUser({id: item?.id}))
                                }}>Delete</button>
                            </td>

                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>

    );
}

export default ListUserAdmin;