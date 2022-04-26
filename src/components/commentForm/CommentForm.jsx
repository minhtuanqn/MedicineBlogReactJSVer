import "./commentForm.css";

export default function CommentForm() {
  return (
    <div className="commentForm">
      <div className="cmtHeader">
        <div className="replyTitle">
          <h3>LEAVE REPLY</h3>
        </div>
        <div className="closeIcon">
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <p>
        Your email address will not be published. Required fields are marked
      </p>
      <br />
      <form>
        <div className="cmtInput">
          <label>
              Comment
              <span className="required" aria-hidden="true">*</span>
            </label>
          <textarea required></textarea>
        </div>
        <div className="cmtInput">
          <label>
              Email
              <span className="required" aria-hidden="true">*</span>
            </label>
          <input type="text" className="commentInput" required/>
        </div>
        <div className="cmtInput">
          <label>
              Name
              <span className="required" aria-hidden="true">*</span>
            </label>
          <input type="text" className="commentInput" required/>
        </div>
        <div className="cmtInput">
            <button>Post Comment</button>
        </div>
      </form>
    </div>
  );
}
