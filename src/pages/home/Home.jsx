import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [topics, setTopics] = useState([]);

    const path = useLocation().pathname.split("/");

    // useEffect(() => {
    //     const fetchTopics = async () => {
    //         var baseUrl = "https://localhost:44303/api/topics/";
    //         const res = axios.get(baseUrl);
    //         setTopics((await res).data.data)
    //     }
    //     fetchTopics()
    // }, [])

    useEffect(() => {
        const fetchPosts = async () => {
            var baseUrl = "https://localhost:44303/api/posts";
            const res = axios.get(baseUrl);
            setPosts((await res).data.data)
        }
        fetchPosts()
    }, [path]);

    
    return (
        <>
            <div className="headerContainer">
                <Header/>
            </div>
            <div className="home">
                <div className="leftSpace">

                </div>
                <div className="postsContainer">
                    <Posts posts = {posts}/>
                </div>
                <div className="betweenSpace">

                </div>
                <div className="sidebarContainer">
                    <SideBar/>
                </div>
                <div className="leftSpace">

                </div>
            </div>
        </> 
    );
}