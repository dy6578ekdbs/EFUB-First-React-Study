import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% -32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  /* cursor: 요소 위에 마우스 커서가 올라갔을 때 보여줄 커서 모양을 지정
  pointer는 손가락 검지로 가리키는 모양 */
  background: white;
  :hover {
    background: lightgrey;
  }
  /* hover는: 요소 위에 마우스 커서가 올라갔을 때, 
  커서의 모양뿐만 아니라 다른 스타일도 적용 가능. */
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const PostListItem = (props) => {
  const { post, onClick } = props;
  return (
    <Wrapper onClick={onClick}>
      <TitleText>{post.title}</TitleText>
    </Wrapper>
  );
};

export default PostListItem;
