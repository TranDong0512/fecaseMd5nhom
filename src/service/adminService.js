import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const AdminGetUser = createAsyncThunk(
    'admin/getUser',
    async ()=>{
        const res = await axios.get(`http://localhost:3000/users`)
        console.log(res)
        return res.data
    }
)
export const AdminDeleteUser = createAsyncThunk(
    'admin/deleteUser',
    async (payload) =>{
        const res = await axios.delete(`http://localhost:3000/users/`+payload.id)
        console.log(res)
        return res.data

    }
)

export const AdminDeleteBlog = createAsyncThunk(
    'admin/deleteBlog',
    async (payload)=>{
        const res = await axios.delete(`http://localhost:3000/blogs/`+payload.id)
        console.log(res)
        return res.data
    }
)

export const AdminGetBlogs = createAsyncThunk(
    'admin/getBlogs',
    async ()=>{
        const res = await axios.get(`http://localhost:3000/blogs`)
        console.log(res)
        return res.data
    }
)