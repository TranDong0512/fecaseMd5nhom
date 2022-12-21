import {createSlice} from "@reduxjs/toolkit";
import {deleteUser, getUser} from "../../service/adminService";


const initialState = {
    currentAdmin:[]
}
const adminSlice = createSlice({
    name:'admin',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(getUser.fulfilled,(state, action)=>{
            console.log(action)
            state.currentAdmin = [...action.payload]

        })
        builder.addCase(deleteUser.fulfilled,(state, action)=>{
            let arrNew = [...state.currentAdmin]
            let index = arrNew.findIndex(item => item.id === action.payload.id);
            arrNew.splice(index, 1);
            state.currentAdmin = arrNew;
        })
    }
})

export default adminSlice.reducer