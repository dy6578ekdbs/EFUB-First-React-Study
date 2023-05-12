import { useState, useCallback } from "react";
import ThemeContText from "./themeContext";
import MainContent from "./mainContent";

function DarkofLight(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);
  return (
    //하위 컴포넌트들이 theme을 사용할 수 있게 provider로 감쌈
    <ThemeContText.Provider value={{ theme, toggleTheme }}>
      <MainContent />
    </ThemeContText.Provider>
  );
}

export default DarkofLight;
