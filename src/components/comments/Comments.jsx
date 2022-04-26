import { useState } from "react";
import Comment from "../comment/Comment";
import CommentForm from "../commentForm/CommentForm";
import "./comments.css";

export default function Comments({ commentsDic }) {
  const [subCmtForm, setSubCmtForm] = useState(false);

  return (
    <div className="commentsWrapper">
      {commentsDic.map((entry, index) => {
        if (entry[1].id === entry[0]) {
          if (index != 0) {
            {
              subCmtForm ? <CommentForm /> : <></>;
            }
          }
          return (
            <div className="commentBlock">
              <Comment comment={entry[1]}/>
              <div className="replyCmt" >
                <i className="fa-solid fa-reply"></i>
                <label>REPLY</label>
              </div>
            </div>
          );
        } else if (entry[1].parentId === entry[0]) {
          return (
            <div className="commentBlock">
              <div className="subCmtForm">
                <Comment comment={entry[1]} />
                <div className="replyCmt">
                  <i className="fa-solid fa-reply"></i>
                  <label>REPLY</label>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div className="commentBlock">
        <div className="subCmtForm">{subCmtForm ? <CommentForm /> : <></>}</div>
      </div>
      {!subCmtForm ? <CommentForm /> : <></>}
    </div>
  );
}
