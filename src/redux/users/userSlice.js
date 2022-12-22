import {createSlice} from "@reduxjs/toolkit";
import {deleteBlogUser, getUser, login, register} from "../../service/userService";


const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user'))
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.currentUser = action.payload
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.currentUser = action.payload

        })
        // builder.addCase(deleteBlogUser.fulfilled,(state, action)=>{
        //     console.log(222222,{state})
        //
        //     let newArr = [...state.currentUser]
        //     console.log(newArr)
        //     let index = newArr.findIndex(item => item.id === action.meta.arg.id)
        //     console.log(index)
        //     newArr.splice(0,1)
        //     state.currentUser = newArr
        //     // let index = state.currentUser.findIndex(item =>item.id === action.payload)
        //     // console.log(index)
        //     // state.currentUser.splice(index,1)
        // })
    }
})

export default userSlice.reducer