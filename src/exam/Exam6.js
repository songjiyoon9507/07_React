// JSX(JavaScript Xml) 사용하기
// 컴포넌트 안에서 자유롭게 return 구문 안에 JSX 문법 작성 가능

// 조건문
function Exam6_1(props) {
    // 부모가 넘겨준 값 매개변수로 받기
    const isLogin = props.isLogin;
    // 부모에게 전달받은 props 중 isLogin 값을 변수에 담아둠
    // 안에는 true 라는 값이 들어있음
    // true 인지 false 인지에 따라서 화면을 다르게 띄워줄 거
    // if(isLogin) {
    //     return <h1>Welcome back!</h1>
    // } else {
    //     return <h1>Please sign up~!</h1>
    // }

    return (
        // 렌더링 시 조건문
        // if / else 지양
        // -> 삼항 연산자
        // 조건문(boolean) ? true 일 때 값 : false 일 때 값
        isLogin ? <h1>Welcome back!</h1> : <h1>Please sign up~!</h1>
    );

}

// map (반복문) 사용법
// React 에서는 javaScript에 map 이라는 내장 함수를 자주 사용함
export function Exam6_2() {
    // Exam6_2 도 App.js 로 내보내고 싶은데 export default 는 값을 하나밖에 못 씀
    // => 컴포넌트 앞에 export 붙여주면 됨
    // 호출할 때 App.js 에서 import 구문에 default 값 뒤에 , { Exam6_2 } 작성해주면 됨

    // java의 map 과 다름 java map 은 컬렉션 key : value
    // map() : 배열에서 사용하는 js 내장 함수
    // -> 배열의 모든 요소에 대해 주어진 함수를 호출하고
    //    함수를 적용한 결과를 새로운 배열로 반환하는 함수
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <li>{number + 1}</li>);
    // return 구문이 한줄 일때는 대괄호 없이 써도 됨
    // 배열의 모든 요소에 대해 안에 주어진 익명함수를 적용한 결과를 호출해서 돌려줌
    // [ <li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li> ]
    // => 새로운 배열로 listItems 안에 들어가져 있는 것
    // <li> 태그 안에 각각 1~5까지 값이 들어가있다.

    return <ul>{listItems}</ul>
    // 위에서 만든 listItems 배열을
    // ul 태그에서 jsx 표현식을 사용하여 렌더링함
}

// 이벤트 처리하기
export function Exam6_3(props) {

    // 버튼이 클릭 됐을 때 일어날 함수를 호출한 다음
    // 호출된 함수가 어떻게 동작할지 정의해줌
    const handleClick = () => {
        alert('버튼 클릭되었음!');
    }

    // 화면에 렌더링할 걸 return 구문 안에 작성
    return (
        <button onClick={handleClick}>{props.label}</button>
    );
}

export default Exam6_1; // 기본적으로 내보내는 컴포넌트가 Exam6_1 이다.