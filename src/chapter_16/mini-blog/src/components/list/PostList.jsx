import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  /* &는 부모 선택자. 현재 요소의 부모 요소를 선택.
  >는 자식 결합자. 손주는 안됨.
  *는 전체 선택자. 모든 요소 선택.*/
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const PostList = (props) => {
  const { posts, onClickItem } = props;

  return (
    <Wrapper>
      {posts.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => {
              onClickItem(post);
            }}
          />
        );
      })}
    </Wrapper>
  );
};

export default PostList;
