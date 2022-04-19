import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
    return (
        <div className="post">
            <img
            className="postImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            />
            <div className="postInfor">
                <div className="postCats">
                    {
                        post.tagIds.split(",").map((tag) => (
                            <span key={tag} className="postCat">{tag}</span>
                        ))
                    }
                </div>
                <Link className="link" to={`/post/${post.id}`}>
                    <span className="postTitle">
                        {post.title}
                    </span>
                </Link>
                <hr/>
                <span className="postDate">{post.createDate}</span>
            </div>
            <p className="postDes">
                {post.content}
            </p>
        </div>
    )
}