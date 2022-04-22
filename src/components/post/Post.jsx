import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.coverPhoto && (
        <img className="postImg" src={post.coverPhoto} alt="" />
      )}

      <div className="postInfor">
        <Link className="link" to={`/post/${post.id}`}>
          <span className="postTitle">{post.title.toUpperCase()}</span>
        </Link>
        <hr />
        <span className="postDate">{post.createDate}</span>
      </div>
      <div
        className="postDes"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="postCats">
        {post.tagIds.split(",").map((tag) => (
          <span key={tag} className="postCat">
            {tag.trim()}
          </span>
        ))}
      </div>
    </div>
  );
}
