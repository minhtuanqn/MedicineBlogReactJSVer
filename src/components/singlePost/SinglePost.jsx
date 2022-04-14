import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          This is medical post demo 
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfor">
          <span className="singlePostAuthor">
            Author: <b>Minh Tuan</b>
          </span>
          <span className="singlePostDate">
            1 hour ago
          </span>
        </div>
        <p className="singlePostDes">
          This is medical post demo This is medical
          post demo This is medical post demo This is medical post demo This is
          medical post demo This is medical post demo. This is medical post demo This is medical
          post demo This is medical post demo This is medical post demo This is
          medical post demo This is medical post demo. This is medical post demo This is medical
          post demo This is medical post demo This is medical post demo This is
          medical post demo This is medical post demo. This is medical post demo This is medical
          post demo This is medical post demo This is medical post demo This is
          medical post demo This is medical post demo
        </p>
      </div>
    </div>
  );
}
