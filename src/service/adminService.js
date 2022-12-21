import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
    'user/getUser',
    async ()=>{
        const res = await axios.get(`http://localhost:3000/users`)
        console.log(res)
        return res.data
    }
)
export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async (payload) =>{
        const res = await axios.delete(`http://localhost:3000/users/`+payload.id)
        console.log(res)
        return res.data

    }
)