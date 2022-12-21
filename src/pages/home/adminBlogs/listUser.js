import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getUser} from "../../../service/adminService";
import axios from "axios";

function ListUserAdmin(props) {
    let dispatch = useDispatch();
    const [userDelete,serUserDelete] = useState()
    const user = useSelector(state => {
        console.log(state.admin.currentAdmin)
        return state.admin.currentAdmin
    })

    useEffect(()=>{
        dispatch(getUser())
    },[])

    return (

            <div className="col-12" style={{marginTop:'6em'}}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Role</th>
                    </tr>
                    </thead>
                    <tbody>
                    {user.map((item,index)=>(
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <td>{item.username}</td>
                            <td>{item.status}</td>
                            <td>{item.role}</td>
                           <button onClick={()=>{
                                dispatch(deleteUser({id: item.id}))
                           }}>Delete</button>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>

    );
}

export default ListUserAdmin;