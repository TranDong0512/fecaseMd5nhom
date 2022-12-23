import {createSlice} from "@reduxjs/toolkit";
import {addBlogs, getBlogs, searchBlogs} from "../../service/blogsService";
import {AdminDeleteBlog} from "../../service/adminService";
import {deleteBlogUser} from "../../service/blogsService";
const initialState = {
    blogs : []
}
const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload
        })
        builder.addCase(searchBlogs.fulfilled,(state, action) => {
            state.blogs = [...action.payload]
        })
        builder.addCase(deleteBlogUser.fulfilled,(state, action)=>{
            let arrNew = [...state.blogs]
            console.log(action)
            let index = arrNew.findIndex(item => item.id === action.payload)
            arrNew.splice(index,1)
            state.blogs = arrNew
        })
        builder.addCase(addBlogs.fulfilled,(state, action)=>{
            console.log(action)
            // let newArr = [...action.payload]

        })
    }
})
export default blogsSlice.reducer