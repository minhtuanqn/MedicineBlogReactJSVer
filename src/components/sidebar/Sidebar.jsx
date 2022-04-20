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
                    Mình là Phạm Thị Thu Thảo, một dược sĩ.<br/><br/>
                    Thuở còn là sinh viên, mình từng có những thắc mắc, về con đường nghề nghiệp, nhưng không có ai giải đáp.<br/><br/>
                    Blog này là nơi mình chia sẻ những kiến thức, kinh nghiệm mà mình đạt được trong quá trình làm việc và trải nghiệm.<br/><br/>
                    Mong rằng nó sẽ giải đáp phần nào những khúc mắc, trăn trở cho những bạn sinh viên như mình ngày xưa.<br/><br/>
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CHỦ ĐỀ BẠN QUAN TÂM</span>
                <ul className="sidebarList">
                    {tags.map((t) => (
                        <li key={t.name} className="sidebarListItem">{t.name}</li>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">THEO DÕI CHÚNG TÔI</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
        
    );
}