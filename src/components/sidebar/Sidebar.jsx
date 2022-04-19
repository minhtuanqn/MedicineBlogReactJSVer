import axios from "axios";
import React, { useEffect, useState } from "react";
import './sidebar.css';

export default function SideBar() {

    const [tags, setTags] = useState([]);

    useEffect(() => {
        const getTags = async () => {
            const res = axios.get("https://localhost:44303/api/tags/");
            setTags((await res).data.data);
        }
        getTags();
    }, []);

    return (
        <div className="sidebar">
            
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-gift-guide.jpg"
                    alt=""
                />
                <p>
                    This is blog about medicine topic. This wwebside will share knowledge
                    about all daily information for our health.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {tags.map((t) => (
                        <li key={t.name} className="sidebarListItem">{t.name}</li>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
        
    );
}