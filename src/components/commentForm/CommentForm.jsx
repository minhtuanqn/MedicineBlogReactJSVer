import "./commentForm.css";

export default function CommentForm() {
  return (
    <div className="commentForm">
      <h3>LEAVE REPLY</h3>
      <br />
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
