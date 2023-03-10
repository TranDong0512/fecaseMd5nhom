import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    'user/login',
    async (data)=>{
        const res = await axios.post('http://localhost:3000/users/login',data)
        return res.data
    }
)
export const register = createAsyncThunk(
    'user/register',
    async (data)=>{
        const res = await axios.post('http://localhost:3000/users/register',data)
        return res.data
    }
)

export const getUser = createAsyncThunk(
    'user/getUser',
    async ()=>{
        const res = await axios.get('http://localhost:3000/users')
        return res.data
    }
)




