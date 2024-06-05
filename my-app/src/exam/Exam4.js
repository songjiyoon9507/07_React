// State & Props

import { useState } from "react";

// Props Drilling : 상태 내리꽂기
// props를 통해서 데이터를 전달할 때, 자식 컴포넌트에서 필요하지 않은 props를 계속해서 전달하는 행위
// -> 코드의 가독성 및 유지보수성을 떨어뜨림
// -> React Context API 나 Redux 같은 상태관리 라이브러리를 사용함

// Exam4 > Child1 > Child2 > Child3 > MyComponent 이런 식으로 부모자식 관계가 연결되어 있을 때
// Exam4의 상태값을 MyComponent에서 사용해야 한다면?

// 부모 컴포넌트
function Exam4() {
    const [name, setName] = useState("홍길동");

    // handleClick 함수 정의
    const handleClick = () => {
        setName("빠삐리빠삐코");
    }

    return (
        <>
            {/* MyComponent 까지 전해주려면 Child1 불러서 name 상태값을 전달해줘야함 */}
            <Child1 name={name} />
            {/* name 이라는 키로 name 이라는 상태값 전달 */}
            <button onClick={handleClick}>이름 변경</button>
        </>
    );
}

// Child1 함수 정의
// 부모에게서 호출되고 있고 name 이라는 이름으로 props 전달됨
// props 전달 받을 준비
function Child1(props) {
    // 하나의 태그만 return 할 때는 소괄호 생략 가능
    return <Child2 name={props.name} />
    // name 이라는 키로 props 안에 name 을 전달하겠다.
}

// Child2 함수 정의
function Child2(props) {
    return <Child3 name={props.name} />
}

// Child3 함수 정의
function Child3(props) {
    return <MyComponent name={props.name} />
}

// 최종적으로 MyCompoment 에서 name 사용하 것
function MyComponent(props) {
    // props 는 Exam4 에서부터 내리꽂기를 통해 전달받은 무보의 상태값

    return <h1>{props.name}</h1>
}

export default Exam4;