import React, { useState } from "react";

//내보낼 함수
function ConfirmButton(props) {
  //컨펌의 원래 상태는 false
  const [isConfirmed, setIsConfirmed] = useState(false);
  //클릭시 이 함수가 실행됨
  //state를 반대로 바꿔줌
  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨 " : "확인하기"}
    </button>
  );
}

export default ConfirmButton;
