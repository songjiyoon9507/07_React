// ThemeChildComponent.js

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// 3레벨 자식 컴포넌트 만들기
// 1레벨이 가진 상태 값이나 함수를 사용할 수 있는지
const ThemeChildComponent = () => {

    const {theme} = useContext(ThemeContext);

    const modeName = theme == 'light' ? '라이트' : '다크';

    return <h1>{modeName} 테마 적용중이에요~</h1>
}

export default ThemeChildComponent;