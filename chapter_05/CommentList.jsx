import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "익명1",
        comment: "안녕하세요, 댓글1입니다.",
    },
    {
        name: "익명2",
        comment: "안녕하세요, 댓글2입니다.",
    },
    {
        name: "익명3",
        comment: "안녕하세요, 댓글3입니다.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;