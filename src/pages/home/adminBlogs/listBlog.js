import React from 'react';
import {deleteUser} from "../../../service/adminService";

function ListBlogAdmin(props) {
    return (
        <div className="row">
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

                        <tr key={item.id}>
                            <th></th>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                    ))}

                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default ListBlogAdmin;