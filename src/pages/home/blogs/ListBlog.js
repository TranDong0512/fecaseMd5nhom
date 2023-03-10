import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, Outlet} from "react-router-dom";
import {addBlogs, getBlogs} from "../../../service/blogsService";
import '../../../style/cssListBlogUser.css'
import {getUser} from "../../../service/userService";

function ListBlog() {
    const dispatch = useDispatch();
    const blogs = useSelector(state => {
        console.log(state)
        return state.blogs.blogs
    })
    //
    const user = useSelector(state => {
        console.log(state)
        return state.user.currentUser.user
    })


    useEffect(() => {
        dispatch(getBlogs())
    }, [])




    return (
        <>
            {blogs?.map((item, index) => (
                <div className="row" style={{marginTop: '30px'}}>
                    <div className="col-12">
                        <div className="col-6 offset-3">
                            <div className="container-main">
                                {/*header*/}
                                <div className="main-header">
                                    <div className="row offset-1">
                                        <div>
                                            <Link to={'#'}>
                                                <img
                                                    src={user?.avatar}
                                                    alt="" className="avatar"/>
                                            </Link>
                                        </div>

                                        <div>
                                            <Link to={'#'}>
                                                <h3 className="nick-name">{item.username} </h3>
                                            </Link>
                                            <div className={'time-post'}>
                                                <h6>{item?.time.split('', 10)}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="title">
                                                <h3>{item?.tittle}</h3>
                                            </div>
                                            <div className="content">
                                                <h6>{item?.content}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*mid*/}
                                <div className="main-middle">
                                    <div>
                                        <div className="row">
                                            <div className="col-12">
                                                <img
                                                    src={item?.image}
                                                    alt="" className="main-image"/>
                                                <hr className={'main-line'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*bottom*/}
                                <div className="main-bottom">
                                    <div className="row">
                                        <div className="col-5 offset-1">
                                            <div className="emotion">
                                                <p style={{textAlign: 'center'}}>Th??ch</p>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="comment">
                                                <p style={{textAlign: 'center'}}>B??nh lu???n</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>

            ))}
            <Outlet></Outlet>
        </>
    );
}

export default ListBlog;