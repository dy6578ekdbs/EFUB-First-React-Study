import { useContext } from "react";
import ThemeContText from "./themeContext";

function MainContent(props) {
  const { theme, toggleTheme } = useContext(ThemeContText);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "1.5rem",
        backgroundColor: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white",
      }}
    >
      <p>밑의 버튼을 누르면 테마가 바뀝니다</p>
      <button onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}

export default MainContent;
