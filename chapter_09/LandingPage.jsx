import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const OnClickLogin = () => {
    setIsLoggedIn(true);
  };
  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        OnClickLogin={OnClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{ padding: 16 }}>리액트 공부</div>
    </div>
  );
}

export default LandingPage;
