// ThemeComponent.js

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
// CSS 파일 임포트 해야함
import './css/style.css';
import ThemeChildComponent from "./ThemeChildComponent";

// 현재 테마 상태에 따라서 스타일을 적용하고 보여줄 컴포넌트
const ThemeComponent = () => {
    // App.js ThemeProvider 두번째 자식
    // theme 상태나 toggleTheme 함수 사용할 수 있음
    // useContext 함수 사용해서 상태에 따라 클래스 다르게 줄거임
    const {theme} = useContext(ThemeContext);
    // 둘 다 쓰고싶으면 const {theme,toggleTheme} = useContext(ThemeContext); 이렇게 작성하면 됨
    // useContext Hook을 사용하여 ThemeContext의 값 중 theme 상태값 가져오기

    // 현재 테마에 따라 클래스 이름 설정
    const themeStyle = theme == 'light' ? 'light-theme' : 'dart-theme';

    return (
        <>
            <div className={themeStyle}>
                {/* css 불러줄거임 light-theme 이거나 dart-theme */}
                현재 {theme} 테마 적용 중 입니다.
                {/* 처음 값 light */}
            </div>

            {/* 새로운 자식 컴포넌트 만들어주기 3레벨 */}
            <ThemeChildComponent />
            {/* propsdrilling 이 없어도 잘 적용됨 */}
        </>
    );
}

export default ThemeComponent;