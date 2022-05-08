import { useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { useDispatch, useSelector } from "react-redux";

export default function TopBar() {
  const user = false;
  const topics = useSelector(state => state.allTopics.topics); 
  const dispatch = useDispatch();
  const [searchSm, setSearchSm] = useState(false);
  const [navSm, setNavSm] = useState(false);


  function changeStateSearch() {
    if (searchSm) {
      setSearchSm(false);
    } else {
      setSearchSm(true);
    }
  }

  function changeStateNav() {
    if (navSm) {
      setNavSm(false);
    } else {
      setNavSm(true);
    }
  }

  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-facebook-square"></i>
          <i className="topIcon fa-brands fa-twitter-square"></i>
          <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem" >
              <Link key="HOME" className="link" to="/">
                HOME
              </Link>
            </li>
            {topics.map((topic) => (
              <li className="topListItem">
                <Link key={topic.id}  className="link" to={topic.description}>
                  {topic.name}
                </Link>
              </li>
            ))}
            <li className="topListItem">
              <Link className="link" to="/">
                ABOUT ME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                {user && "WRITE"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="topSm">
        <i
          onClick={changeStateSearch}
          className="topSmIcon topSearchIcon fa-solid fa-magnifying-glass"
        ></i>
        <i onClick={changeStateNav} className="topSmIcon fa-solid fa-bars"></i>
      </div>
      {searchSm ? (
        <div className="searchContainerSm">
          <form className="searchFormSm">
            <input type="text" placeholder="Search..." />
          </form>
        </div>
      ) : (
        <></>
      )}
      {navSm ? (
        <div className="navTopic">
          <ul className="navListSm" onClick={changeStateNav}>
            <li className="topListItemSm">
              <Link key="HOME" className="link" to="/">
                HOME
              </Link>
            </li>
            {topics.map((topic) => (
              <li className="topListItemSm">
                <Link key={topic.id} className="link" to={topic.description}>
                  {topic.name}
                </Link>
              </li>
            ))}
            <li className="topListItemSm">
              <Link className="link" to="/">
                ABOUT ME
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
