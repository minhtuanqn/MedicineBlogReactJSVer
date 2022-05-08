import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home({type}) {
  const [posts, setPosts] = useState([]);

  const path = useLocation().pathname.split("/");
  var uri = path.length > 2 ? path[2] : path[1];

  useEffect(() => {
    const fetchPosts = async () => {
      var searchName  = uri ? uri : "";
     
      var baseUrl = "https://localhost:44303/api/";
      var url = baseUrl;
      if(type === 'topic') {
        url = searchName ? baseUrl + "topics/" + searchName +  "/posts" : baseUrl + "posts";
      } else if (type === 'tag') {
        url = searchName ? baseUrl + "tags/" + searchName +  "/posts" : baseUrl + "posts";
      }
      const res = await axios.get(url).catch(err => {
        console.log(err);
      });
      setPosts(res?.data?.data);
    };
    fetchPosts();
  }, [uri]);

  return (
    <>
      <div className="headerContainer">
        <Header />
      </div>
      <div className="home">
        <div className="leftSpace"></div>
        <div className="postsContainer">
          <Posts posts={posts} />
        </div>
        <div className="betweenSpace"></div>
        <div className="sidebarContainer">
          <SideBar />
        </div>
        <div className="leftSpace"></div>
      </div>
    </>
  );
}
