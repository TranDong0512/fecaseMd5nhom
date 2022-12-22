import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addBlogs} from "../../../service/blogsService";
import {storage} from "../../../firebase";
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";

function AddBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => {
        return state.user.currentUser;
    })
    const [submitting, setSubmitting] = useState(false)
    const handleAdd = (values) => {
        let data = {
            ...values,
            idUser: users.id,
            image:img,
        }
        dispatch(addBlogs(data))
        navigate('/home')
    }

    const [imageUrls, setImageUrls] = useState([]);
    const [img, setImg] = useState("");

    const imagesListRef = ref(storage, "images/");
    const uploadFile = (imageUpload) => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImg(url)
                setSubmitting(false)
            });
        })

    };
    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);
    return (

        <div style={{marginTop:"100px"}}>
            <h1 style={{textAlign: "center"}}>Add Blogs</h1>
            <Formik initialValues={{
                tittle: '',
                content: '',
                image: '',
                url: imageUrls
            }} onSubmit={(values) => {
                handleAdd(values);
            }}>
                <Form>
                    <div className="group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <Field type={'text'} name={'tittle'} className={'form-control'}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Contents</label>
                        <Field type={'text'} name={'content'} className={'form-control'}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Image</label>
                        <input
                            type="file" onChange={(event) => {
                            setSubmitting(true)
                            uploadFile(event.target.files[0])
                        }}/>
                    </div>
                    <div className="form-group">
                    </div>
                    <button type="submit" disabled={submitting}>Submit</button>
                </Form>
            </Formik>
        </div>
    );
}
export default AddBlog;
