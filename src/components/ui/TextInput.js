import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) =>
    props.height &&
    `
height : ${props.height}px`}
`;

function TextInput(props) {
  const { height, value, onChange } = props;
  return (
    <StyledTextArea
      height={height}
      value={value}
      onChange={onChange}
    ></StyledTextArea>
  );
}

export default TextInput;
