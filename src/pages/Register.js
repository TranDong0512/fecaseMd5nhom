import React from 'react';
import {Field, Form, Formik} from "formik";
import '../style/cssLogin.css'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../service/userService";

function Register(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = async (value) => {
       let checkRegister =  await dispatch(register(value))
        console.log(checkRegister)
        if(checkRegister.payload.checkRegister){
            alert("dk thanh cong")
            navigate('/')
        }
        else {
            alert('tk da ton tai')
        }
    }

    return (
        <div>
            <div className="row">
                <div className='offset-3 col-6 box'>
                    <h1 style={{margin: '15px 0 15px 18px'}}>Register</h1>
                    <Formik initialValues={{
                        username: '',
                        password: '',
                        status: "false",
                        image: "abc.jpg",
                        role: "user"
                    }} onSubmit={(values,{resetForm}) => {
                        handleRegister(values).then()
                        resetForm()
                    }}>
                        <Form>
                            <label className="pl-1rem">User Name / Email</label>
                            <Field className="form-control form-group inp " name={'username'} required></Field>
                            <label className="pl-1rem">Password</label>
                            <Field className="form-control form-group inp" name={'password'} required></Field>
                            <button className='btn btn-primary lg mt-2'>Register</button>
                            <div className="hr"></div>
                        </Form>
                    </Formik>
                    <Link to={'/'} style={{color: 'white', textDecoration: "none"}}>
                        <button className='btn btn-primary re mt-2'>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;