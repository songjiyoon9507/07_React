// Component 예제 2

import { useState } from "react";

// 함수형 컴포넌트
function Exam2() {

    // 함수형 컴포넌트에서 상태를 사용하는 방법
    // react 안에 useState import 해서 사용
    // Hooks 상태 관리하거나 react 에서 만들어둔 기능 모음
    // 그 중에 상태값을 쉽게 다룰 수 있게 만들어둔 useState 가 Hooks 안에 있는 거
    const [name, setName] = useState("지윤ʕ•ﻌ•ʔ");

    const handleClick = () => {
        setName("지윤๑•‿•๑");
        // 상태 값을 변경해주는 함수
    }

    // render 는 클래스형 컴포넌트에서만 사용
    return (
        // 함수형 컴포넌트는 render() 함수 제외하고 바로 return 작성하면 된다.
        <div>
            <h1>Hello, {name}</h1>
            <button onClick={handleClick}></button>
        </div>
    );
}

export default Exam2;