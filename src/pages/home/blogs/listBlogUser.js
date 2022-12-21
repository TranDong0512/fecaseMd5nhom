import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../../../service/blogsService";
import {Link} from "react-router-dom";
import '../../../style/cssListBlogUser.css'

function ListBlogUser(props) {
    const dispatch = useDispatch();

    const blogs = useSelector(({blogs}) => {
        return blogs.blogs
    })
    const user = useSelector(({user}) => {
        return user.currentUser;
    })

    useEffect(() => {
        dispatch(getBlogs())
    }, [])


    return (
        <>
            {
                blogs.map((blog, index) => {
                    if (blog.username === user.username) {
                        return (
                            <div className="row" style={{marginTop: '30px', marginBottom: "50px"}}>
                                <div className="col-12">
                                    <div className="col-6 offset-3">
                                        <div className="container-main">
                                            {/*header*/}
                                            <div className="main-header">
                                                <div className="row offset-1">
                                                    <div>
                                                        <Link to={'#'}>
                                                            <img
                                                                src={blog.image}
                                                                alt="" className="avatar"/>
                                                        </Link>
                                                    </div>

                                                    <div>
                                                        <Link to={'#'}>
                                                            <h3 className="nick-name">{blog.username}</h3>

                                                        </Link>
                                                        <div className={'time-post'}>
                                                            <h6>{blog.time.split('', 10)}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="title">
                                                            <h3>{blog.tittle}</h3>
                                                        </div>
                                                        <div className="content">
                                                            <h6>{blog.content}</h6>
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
                                                                src={blog.image}
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
                                                            <p style={{textAlign: 'center'}}>Thích</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="comment">
                                                            <p style={{textAlign: 'center'}}>Bình luận</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    } else {
                        return "Không có dữ liệu"
                    }
                })

            }

        </>
    )

}

export default ListBlogUser;