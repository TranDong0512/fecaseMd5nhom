import React, {useEffect} from 'react';
import {Field, Form, Formik} from "formik";
import '../style/cssLogin.css'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../service/userService";
function Login(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch();


    const handleLogin = async (value) =>{
       let checkLogin = await dispatch(login(value))
        console.log(checkLogin)

        if (checkLogin.payload.token){
           if(checkLogin.payload.user.username === 'admin' && checkLogin.payload.user.role === 'admin'){
               navigate('/admin')
           }else if(checkLogin.payload.user.role ==="user" && checkLogin.payload.user.status === "true"){
               navigate('/home')
           }
        }
        else {
            alert('tk hoac mk không đúng')
            value.username = ""
            value.password = ""
        }
    }

    const user = useSelector(state => {
        console.log(state)
        return state.user
    })
    return (
        <div>
            <div className="row">
                <div className='offset-3 col-6 box'>
                    <h1 style={{margin:'15px 0 15px 18px'}}>Login</h1>
                    <Formik initialValues={{
                        username:"",
                        password:""
                    }} onSubmit={(values)=>{
                        handleLogin(values).then()
                    }}>
                        <Form >
                            <label className="pl-1rem">User Name / Email</label>
                            <Field className="form-control form-group inp" name={'username'} required></Field>
                            <label className="pl-1rem">Password</label>
                            <Field className="form-control form-group inp" name={'password'} required></Field>
                            <button className='btn btn-primary lg mt-2'>Login</button>
                            <div className="hr"></div>
                            <p className="pl-1rem blur">Dont't have account? Register now!</p>
                        </Form>
                    </Formik>
                    <Link to={'register'} style={{color:'white', textDecoration:"none"}}><button className='btn btn-primary re mt-2'>Register</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Login;