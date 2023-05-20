import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "./../list/CommentList";
import TextInput from "./../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% -32px);
    display: flex:
    flex-direction: column;
    align-items: center:
    justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
  /* pre-wrap 속성값은 pre 속성값과 동일하게 연속된 띄어쓰기와 
  들여쓰기, 줄바꿈을 있는 그대로 보존해주는데요. 
  유일한 차이점은 텍스트 안에 긴 행이 있을 때 
  해당 행에서 자동으로 줄바꿈이 일어납니다. */
`;

const commentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const PostWritePage = (props) => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const post = data.find((item) => {
    return item.id == postId;
  });

  const [comment, setComment] = useState("");

  return (
    <Wrapper>
      <Container>
        <Button
          title="뒤로 가기"
          onClick={() => {
            navigate("/");
          }}
        />
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <commentLabel>댓글</commentLabel>
        <CommentList comments={post.comments} />

        <TextInput
          height={20}
          value={comment}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <Button
          title="댓글 작성하기"
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default PostWritePage;
