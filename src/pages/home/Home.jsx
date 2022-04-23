import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = axios.get("https://localhost:44303/api/posts/")
            setPosts((await res).data.data)
        }
        fetchPosts()
    }, [])

    
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