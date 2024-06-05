// props 응용
// 전개 연산자 (...) : 객체 내부의 모든 값을 props로 전달하는 방법

import { useState } from "react";

// 부모
function Exam5() {
    const [userData, setUserData] = useState({ name : '홍길동' , age : 30 });
    // 자바스크립트 객체 형태 userData 안에 상태값으로 넣겠다.

    // return <MyComponent name={userData.name} age={userData.age}/>
    // 이렇게 사용해도 되지만 한번에 값을 넘겨주고 싶을 때 전개연산자 사용
    return <MyComponent {...userData} />
    // 뭉쳐있는 걸 전개연산자 이용해서 펼쳐줌
}

// 자식
function MyComponent(props) {
    const {name, age} = props;
    // 자식 컴포넌트도 props 안에 name 값 age 값 꺼내서 사용할 수 있음

    const content = `안녕하세요 제 이름은 ${name} 이고, 나이는 ${age} 세 입니다.`;
    return <h3>{content}</h3>
}

export default Exam5;