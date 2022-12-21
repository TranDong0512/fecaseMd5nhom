import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import ListBlog from "./pages/home/blogs/ListBlog";
import AddBlog from "./pages/home/blogs/AddBlog";
import {useSelector} from "react-redux";

import AdminBlogs from "./pages/home/adminBlogs/adminBlogs";
import ListUserAdmin from "./pages/home/adminBlogs/listUser";
import ListBlogAdmin from "./pages/home/adminBlogs/listBlogAdmin";
import Profile from "./pages/home/blogs/Profile";
import ListBlogUser from "./pages/home/blogs/listBlogUser";

function App() {
    const user = useSelector(state => {
        return state.user
    })
    return (
        <div>
            <div className={"container-fluid"}>
                <Routes>
                    <Route path={''} element={<Login/>}/>
                    <Route path={'register'} element={<Register/>}/>
                    {
                        user.currentUser != null ?
                            <>
                                <Route path={'admin'} element={<AdminBlogs/>}>
                                    <Route path={''} element={<ListUserAdmin/>}/>
                                    <Route path={'list-blog'} element={<ListBlogAdmin/>}/>
                                </Route>

                                <Route path={'home'} element={<Home/>}>
                                    <Route path={''} element={<ListBlog/>}/>
                                    <Route path={'add-blog'} element={<AddBlog/>}/>
                                    <Route path={'profile'} element={<Profile/>}>
                                        <Route path={''} element={<ListBlogUser/>}/>
                                    </Route>
                                </Route>
                            </>
                            :
                            <Route path="*" element={<Login/>}/>
                    }
                </Routes>
            </div>
        </div>
    );
}

export default App;
