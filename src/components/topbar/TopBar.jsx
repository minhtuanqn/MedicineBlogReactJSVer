import { useState } from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';
import axios from 'axios';
import { useEffect } from 'react';

export default function TopBar() {
    const user = true;
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const fetchTopicss = async () => {
            const res = axios.get("https://localhost:44303/api/topics/")
            setTopics((await res).data.data)
        }
        fetchTopicss()
    }, []);

    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link key="HOME" className='link' to="/">HOME</Link>
                    </li>
                    {
                        topics.map((topic) => (
                            <li className="topListItem">
                                <Link key={topic.id} className='link' to="/">{topic.name}</Link>
                            </li>
                        ))
                    }
                    <li className="topListItem">
                        <Link className='link' to="/">ABOUT ME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/write">
                            {user && "WRITE"}
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/logout">
                            {user && "LOGOUT"}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                        className='topImg'
                            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                    )
                    : 
                    (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to="/login">LOGIN</Link>
                            </li>
                            <li className='topListItem'>
                                <Link className='link' to="/register">REGISTER</Link>
                            </li>                            
                        </ul>
                    )
                }
                
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}