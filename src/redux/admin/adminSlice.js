import {createSlice} from "@reduxjs/toolkit";
import {AdminDeleteBlog, AdminDeleteUser, AdminGetBlogs, AdminGetUser,} from "../../service/adminService";


const initialState = {
    currentAdmin:[]
}
const adminSlice = createSlice({
    name:'admin',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(AdminGetUser.fulfilled,(state, action)=>{
            state.currentAdmin = [...action.payload]
        })
        builder.addCase(AdminDeleteUser.fulfilled,(state, action)=>{
            let arrNew = [...state.currentAdmin]
            let index = arrNew.findIndex(item => item.id === action.meta.arg.id);
            arrNew.splice(index, 1);
            state.currentAdmin = arrNew;
        })
        builder.addCase(AdminGetBlogs.fulfilled,(state, action)=>{
            state.currentAdmin = action.payload
        })

    }
})

export default adminSlice.reducer