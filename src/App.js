import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {setTopics} from './actions/topicsAction';
import { setTags } from "./actions/tagsAction";

function App() {
  const user = false;

    const topics = useSelector((state) => state);
    const tags = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchTopics = async () => {
        const res = await axios
          .get("https://localhost:44303/api/topics")
          .catch((err) => {
            console.log("Err", err);
          });
          console.log(res.data.data)
        dispatch(setTopics(res.data.data));
      };

      fetchTopics();
    }, []);

    useEffect(() => {
      const fetchTags = async () => {
        const res = await axios
          .get("https://localhost:44303/api/tags")
          .catch((err) => {
            console.log("Err", err);
          });
          console.log(res.data.data)
        dispatch(setTags(res.data.data));
      };

      fetchTags();
    }, []);


  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home type="topic"/>} />
        <Route path="/bai-viet-hay" element={<Home type="topic"/>} />
        <Route path="/suc-khoe" element={<Home type="topic"/>} />
        <Route path="/thong-tin-thuoc" element={<Home type="topic"/>} />
        <Route path="/register" element={user ? <Home type="topic"/> : <Register />} />
        <Route path="/login" element={user ? <Home type="topic"/> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/tag/:tagId" element={<Home type="tag"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
