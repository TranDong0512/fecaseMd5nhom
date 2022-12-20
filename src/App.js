
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import ListBlog from "./pages/home/blogs/ListBlog";
import AddBlog from "./pages/home/blogs/AddBlog";
import {useDispatch, useSelector} from "react-redux";

import AdminBlogs from "./pages/home/adminBlogs/adminBlogs";

function App() {
    const user = useSelector(state => {
        console.log(state.user)
        return state.user
    })
  return (
    <div>
        <div className={"container-fluid"}>
            <Routes>
                <Route path={''} element={<Login/>}/>
                <Route path={'admin'} element={<AdminBlogs/>}/>
                <Route path={'register'} element={<Register/>}/>
                {
                    user.currentUser != null ?
                    <Route path={'home'} element={<Home/>}>
                        <Route path={''} element={<ListBlog/>}/>
                        <Route path={'add-blog'} element={<AddBlog/>}/>
                    </Route>
                        :
                        <Route path="*" element={<Login/>}/>
                }
            </Routes>
        </div>
    </div>
  );
}

export default App;
