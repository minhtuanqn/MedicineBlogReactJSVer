import { useState } from "react";
import CommentForm from "../commentForm/CommentForm";
import "./comment.css";

export default function Comment() {
  return (
    <div className="comment">
      <div className="commentInfor">
        <img
          className="imgComment"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <div className="detailsInfor">
          <h4>Le Minh Tuan</h4>
          <p>25/08/2020 AT 12:42 PM</p>
        </div>
      </div>

      <div className="commentDes">
        Tuy nhiên có 1 sự thật là sự phát triển các công cụ kéo thả khiến cho
        nhiều ng xem thường vai trò của dev bây giờ. Rằng thì làm 1 con web dễ
        ợt à, cần méo gì code. Rồi thì kéo thả thôi cũng có thể trở thành web
        dev, thì cần quái gì học mấy năm đại học?? Suy nghĩ như vậy mới gây hại,
        còn bản thân các công cụ sinh ra chỉ giúp mọi thứ dễ dàng hơn thôi.
      </div>
    </div>
  );
}
