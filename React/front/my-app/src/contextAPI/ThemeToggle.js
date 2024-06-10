// ThemeToggle.js

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// 테마를 다크모드 라이트모드 토글하는 버튼 컴포넌트를 만들어서 내보낼거임
const ThemeToggle = () => {
    // App.js ThemeProvider 태그 안에 들어갈 첫번째 자식
    // theme, toggleTheme 이용할 수 있음
    // => 버튼 누르면 toggle 되게 해줄 거임
    const {toggleTheme} = useContext(ThemeContext);
    // useContext Hook을 사용하여 ThemeContext의 값 중 toggleTheme 이라는 함수를 가져온 거

    // 버튼 클릭 시 toggleTheme 함수 호출
    return <button onClick={toggleTheme}>테마 토글</button>
}

export default ThemeToggle;