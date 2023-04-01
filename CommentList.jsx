import React from "react";
import Comment from "./Comment";

const comment = [
  {
    name: "rlagustn",
    comment: "안녕하쇼",
  },
  {
    name: "dkfjl",
    comment: "안녕하쇼 저는 어쩌구",
  },
  {
    name: "rudfk",
    comment: "안녕하세요 ㅎㅎㅎ",
  },
];
function CommentList(props) {
  return (
    <div>
      {CommentList.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommnetList;
