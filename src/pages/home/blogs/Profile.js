import React, {useEffect} from 'react';
import '../../../style/cssProfile.css'
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../../service/userService";
import ListBlogUser from "./listBlogUser";
import {getBlogs} from "../../../service/blogsService";

function Profile(props) {

    const dispatch = useDispatch()
    const user = useSelector(state => {
        console.log(state.user.currentUser)
        return state.user.currentUser
    })

    useEffect(() => {
        dispatch(getBlogs())
    },[])
    return (
        <div>

            <div className="row" style={{marginTop: '90px'}}>
                <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="profile-img">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                        alt=""/>
                                    <div className="file btn btn-lg btn-primary">
                                        Change Photo
                                        <input type="file" name="file"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="profile-head">
                                    <h5>
                                        NAME : {user.username}
                                    </h5>
                                </div>
                                <div className="profile-head">
                                    <h6 style={{marginTop: '55px'}}>
                                        Status : {user.status === 'true' ? "Active" : ''}
                                    </h6>
                                </div>

                            </div>

                            <div className="col-md-2">
                                <input type="submit" className="profile-edit-btn" name="btnAddMore"
                                       value="Edit Profile"/>
                            </div>
                            <div style={{width: "100%", height: "1px", background: "black"}}></div>
                        </div>

                    </form>
                </div>
            </div>
            <ListBlogUser></ListBlogUser>
        </div>
    );
}

export default Profile;