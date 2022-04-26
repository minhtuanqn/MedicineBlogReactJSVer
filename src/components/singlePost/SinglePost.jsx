import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comment from "../comment/Comment";
import CommentForm from "../commentForm/CommentForm";
import Comments from "../comments/Comments";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  function proccessCmt(initCmts) {
    var combinedCmts = [];
    Object.entries(initCmts).map(initCmt => {
      initCmt[1].map(cmt => {
        var cmtDict = [initCmt[0], cmt];
        combinedCmts.push(cmtDict);
      })
    })
    return combinedCmts;
  }

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("https://localhost:44303/api/posts/" + path);
      setPost(res.data.data);
      var combinedCmts = proccessCmt(res.data.data.comments);
      setComments(combinedCmts);
    };
    getPost();
  }, [path]);


  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.coverPhoto && (
          <img src={post.coverPhoto} alt="" className="singlePostImg" />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfor">
          <span className="singlePostAuthor">
            Author: <b>{post.authorName}</b>
          </span>
          <span className="singlePostDate">{post.createDate}</span>
        </div>
        <div
          className="singlePostDes"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <hr />
      <div className="commentContainer">
        <div className="titleComment">
          <h4>
            10 THOUGHTS ON “LẬP TRÌNH WEB LIỆU CÓ “CHẾT” HAY HẾT THỜI KHÔNG?”
          </h4>
        </div>
        <div className="comments">
          <Comments commentsDic = {comments}/>
        </div>
      </div>
    </div>
  );
}
