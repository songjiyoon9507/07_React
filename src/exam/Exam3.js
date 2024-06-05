// State & Props

import { useState } from "react"

// State lifting up : 상태 끌어올리기
// 리액트에서는 부모 컴포넌트가 자식 컴포넌트의 상태를 직접 변경할 수 없다
// -> 자식에서 발생한 이벤트를 부모에서 처리하도록 하는 상태 끌어올리기 패턴을 이용해야한다.

// 해당 파일에서 컴포넌트 총 3개 존재
// Id 컴포넌트 (자식)
// Pw 컴포넌트 (자식)
// Exam3 컴포넌트 (부모) - 해당 파일에서 내보낼 기본 컴포넌트

// Id 컴포넌트 (자식)
// function Id() {

// }
// JS에서 사용하는 화살표 형태 함수도 사용 가능함
const Id = (props) => {
    // 부모가 전달한 함수를 받아야함 props : {onChangeId}
    // 부모에게서 전달받은 모든 속성을 props 라고 부름
    // 꺼내고 싶은 거 꺼내서 쓰면 됨
    // 꺼내는 방법
    const { onChangeId } = props; // props 안에 있는 onChangeId 라는 이름의 함수를 이용할 수 있게 됨.

    // const [id, setId] = useState(""); // 상태(state) 중 'id'를 생성하고 초기값 "" 설정

    return (
        // 함수형 컴포넌트는 render() 안 써도 됨 바로 return 쓰면 됨
        // JSX 문법 사용
        // JSX를 사용한 html 구문 작성부는 무조건 최상위 부모태그 하나로 감싸져 있어야한다.
        <> {/* 모두를 감싸는 최상위 태그 하나가 있어야함 빈태그여도 괜찮음 */}
            <div>
                <label>ID : </label>
                <input onChange={onChangeId}/>
                {/* onChange 이벤트 핸들러에 부모님한테 전달 받은 onChangeId를 연결해줄 거다. */}
            </div>
            {/* <h1></h1> // 이게 최상위 태그 */}
            {/* <h1></h1> // 같은 레벨의 형제가 있으면 에러남 */}
        </>
    );
}

// Pw 컴포넌트 (자식)
const Pw = ({onChangePw}) => {
    // props 대신 매개변수 자리에서 바로 부르는 방법
    // {} 를 이용하여 props 안에 있는 값을 바로 꺼내서 쓸 수도 있다.

    // const [pw, setPw] = useState(""); // 상태(state) 중 'pw'를 생성하고 초기값 "" 설정

    return (
        <>
            <div>
                <label>PW : </label>
                <input onChange={onChangePw}/>
                {/* 함수 연결 */}
            </div>
        </>
    );
}

// Exam3 컴포넌트 (부모)
const Exam3 = () => {
    // id 와 pw 가 여기에 정의 돼있어야 return 구문에서 사용할 수 있음
    // 상태 끌어올리기
    const [id, setId] = useState("")
    const [pw, setPw] = useState("");
    // 자식의 상태를 부모에서 정의 (상태 끌어올리기)

    // id, pw input 창 react 가 실시간으로 알 수 있는 이벤트 핸들러 만들어줘야함
    // -> input 창에 작성한 값이 id, pw 에 업데이트가 돼야함
    // input 창 안에 값이 작성될 때마다 상태를 업데이트 시키겠다는 eventHandler 필요

    // 자식의 상태를 변경할 수 있는 함수 정의
    // 상태 변경하려면 setId, setPw 이용하면 됨
    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangePw = (e) => {
        setPw(e.target.value);
    }

    // 위 함수를 이용하려면 호출해줘야함

    return (
        <>
            {/* 컴포넌트 중 Id를 불러 렌더링함 (Id가 Exam3의 자식이 됨) */}
            {/* <Id /> */}
            {/* -> 컴포넌트임, 태그 안에 onClick 이벤트를 사용할 수 없음 */}
            {/* 자식한테는 props 만할 수 있음 props 역할로서 전달만할 수 있음 전달할 때 이름 지정할 수 있음 */}
            {/* 짓고 싶은 이름으로 속성 작성 K:V 형태로 넘어감 */}
            <Id onChangeId={onChangeId}/>

            {/* 컴포넌트 중 Pw를 불러 렌더링함 (Pw가 Exam3의 자식이 됨) */}
            <Pw onChangePw={onChangePw}/>
            {/* onChangePw 이름으로 onChangePw 함수를 전달할거다. */}

            <div>
                {/* button 의 disabled 속성 : 비활성화 속성 (비활성 true / 활성 false)
                    -> id와 pw 둘 다 작성되어있어야 버튼 활성화 시켜줄 거
                */}
                <button disabled={id.length === 0 || pw.length === 0}>Login</button>
            </div>
        </>
    );
}

export default Exam3;