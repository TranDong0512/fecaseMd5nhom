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
                                dispatch(AdminDeleteUser({id: item.id}))
                           }}>Delete</button>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>

    );
}

export default ListUserAdmin;