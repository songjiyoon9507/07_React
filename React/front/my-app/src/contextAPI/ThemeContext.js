// ThemeContext.js
// 내가 만들고자 하는 Context를 정의할 파일

import { createContext, useState } from "react";

// Context API는 React에서 컴포넌트 트리 전체에 걸쳐 전역적인 데이터를 공유하고 전달하기 위한 방법
// -> 깊이 중첩된 컴포넌트들 간에도 데이터를 간편하게 전달할 수 있다.
// -> props drilling(상태 내리꽂기)을 피하기 위해 사용

// 사용방법
// createContext() 함수를 사용하여 Context 객체를 생성할 수 있음
// -> Provider와 Consumer를 포함

// 1. Provider : 컨텍스트를 사용하는 컴포넌트들에게 값을 제공하는 역할.
//               값을 전달할 (자식)컴포넌트들을 감싸고, 'value'라는  prop을 통해서 전달할 값을 지정
// 2. Consumer : 컨텍스트의 값을 사용하는 컴포넌트.
//               최근에는 React 에서는 useContext Hook 사용하여 컨텍스트 값을 가져와 사용함
//               => Consumer를 부르지 않아도 컨덱스트 값을 부를 수 있는 Hook

// ThemeContext라는 이름의 새 Context 생성
const ThemeContext = createContext(); // 자동 완성 import

// Context 객체를 이용할 컴포넌트 생성
// ThemeProvider 컴포넌트 생성
const ThemeProvider = ({children}) => {
    // App.js 에서 불러다가 쓸 거임 (최상위 컴포넌트로)
    // 전역적인 상태를 줄거임
    
    // 테마에 관한 상태 정의, 초기값은 light
    const [theme, setTheme] = useState('light');

    // 버튼 클릭 시 다크 모드 (다른 파일에 만들 거)
    // 테마를 토글 시켜줄 함수를 정의해줄 거
    const toggleTheme = () => {
        // 함수가 실행될 때마다 setTheme 상태 변경 시켜줄 거
        setTheme(theme == 'light' ? 'dark' : 'light');
    }

    // 화면에 렌더링 시켜줄 무언가
    // ThemeContext.Provider를 통해서 '상태 theme' 과 'toggleTheme 함수'를 제공
    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {/* ThemeContext가 제공하는 provider를 통해서 만들어준 상태 theme, toggleTheme 함수를 전달해줄 거 */}
            {/* 이 안에 들어오는 모든 컴포넌트들에게 */}
            {/* value 라는 prop 에 theme, toggleTheme 두개를 전달해줘야함 */}
            {children}
            {/* ThemeProvider 를 App.js 에서 불러다 쓸건데 ThemeProvider 태그에 불러다 쓸 거
            태그 안에 불린 애들이 children 안에 다 들어올 거 */}
            {/* children  안에 다 들어와서 theme, toggleTheme 다 쓸 수 있게 */}
        </ThemeContext.Provider>
    );

}

// 두 개 내보낼 거임
export {ThemeContext, ThemeProvider};