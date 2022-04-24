import { useState } from "react";
import Comment from "../comment/Comment";
import CommentForm from "../commentForm/CommentForm";
import "./comments.css";

export default function Comments() {
  const [subCmtForm, setSubCmtForm] = useState(true);

  return (
    <div className="comments">
      <div className="commentBlock">
        <Comment />
        <div className="subCmtForm">
          <Comment />
          <Comment />
          {subCmtForm ? <CommentForm /> : <></>}
        </div>
      </div>
      <div className="commentBlock">
        <Comment />
        <div className="subCmtForm">
          <Comment />
          <Comment />
          {subCmtForm ? <CommentForm /> : <></>}
        </div>
      </div>
      {!subCmtForm ? <CommentForm /> : <></>}
    </div>
  );
}
