import React from 'react';
import {Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

function NavbarAdmin(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => {
        console.log(state.user)
        return state.user
    })

    return (
        <div>
            <div className="row" >
                <div className="col-12" style={{position:"fixed",zIndex:100}}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="">Home</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/admin">List Users <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="list-blog">List Blogs <span className="sr-only">(current)</span></Link>
                                </li>
                                <li>
                                    <Formik initialValues={{
                                        search: ''
                                    }} onSubmit={(values)=>{
                                        console.log(values)
                                    }}>
                                        <Form className="form-inline my-2 my-lg-0" style={{position:'relative',left:"186px"}}>
                                            <Field className="form-control mr-sm-2" type="search" style={{width:"330px"}} name={"search"} placeholder="Search"></Field>
                                            <button className="btn btn-outline-success my-2 my-sm-0" >Search</button>
                                        </Form>
                                    </Formik>
                                </li>
                            </ul>
                            <div>Welcome ADMIN</div>
                            <div className="form-inline my-2 my-lg-0">

                                <button className=" ml-3 btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={()=>{
                                    localStorage.clear()
                                    navigate('/')
                                }}>Logout
                                </button>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavbarAdmin;