import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async () =>{
        const res = await axios.get('http://localhost:3000/blogs')
        return res.data
    }
)
export const searchBlogs = createAsyncThunk(
    'blogs/searchBlogs',
    async (data) =>{
        const res = await axios.get(`http://localhost:3000/blogs/find-by-name/?name=${data.search}`)
        return res.data
    }
)

export const addBlogs = createAsyncThunk(
    'blogs/addBlogs',
    async (data) =>{
        const res = await axios.post('http://localhost:3000/blogs',data)
        return res.data
    }
)
export const deleteBlogUser = createAsyncThunk(
    'user/deleteBlog',
    async (payload)=>{
        const res = await axios.delete(`http://localhost:3000/blogs/`+payload.id)
        return payload.id
    }
)


