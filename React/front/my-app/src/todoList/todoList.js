import { useState } from "react";

/*
    React 에서 꼭 지켜야하는 개념
    불변성을 유지해야함. (얕은 복사 이유)
    immutability
    : 데이터 구조(ex. 배열, 객체 등)의 원본값을 변경할 수 없는 성질을 의미함.
    -> 불변성을 유지한다는 것은 한 번 설정된 초기값을 가진 데이터 구조를 직접 변경하지 않고,
    항상 새로운 데이터 구조를 생성해서 업데이트하는 것을 뜻함

    왜? React는 상태변화가 일어날 때 효율적으로 컴포넌트를 리렌더링하기 위해
    상태의 불변성을 가정한다.
    불변성을 유지하면 이전 상태와 새로운 상태가 다르다는 것을 쉽게 알 수 있으며,
    이를 통해서 변경된 부분만 업데이틑 할 수 있는 것.
*/

function TodoList() {

    // 상태
    const [todos, setTodos] = useState([{title : "React 복습하기", isDone : false},
        {title : "일기쓰기", isDone : true}]);

    const [inputValue, setInputValue] = useState('');

    // 함수
    // 할 일 추가 함수
    const handleAddTodo = () => {
        // 기존의 todos 배열과 새로운 할 일 객체를 이어붙여서 새로운 배열을 만든 후,
        // 이를 setTodos 함수를 사용하여 업데이트함.
        // 전개 연산자 => 얕은 복사
        setTodos([...todos, {title : inputValue, isDone : false}]);
        setInputValue(""); // 입력 필드에 있는 값 비워주기
    }

    // 할 일 삭제 함수
    const handleDeleteTodo = (index) => {
        // 함수 호출할 때 넘겨준 index 를 받아줘야함
        // 기존 배열 모양 그대로 복사할 거
        // 얕은 복사 방법 1번째 : slice() 이용 - 원본 배열을 변경하지 않고, 새로운 배열을 반환
        const newTodos = todos.slice(); // 기존의 todos 배열을 복사하여 새로운 배열을 생성

        newTodos.splice(index, 1);
        // splice() : 배열의 기존 요소를 삭제 [추가 또는 교체]
        // splice(start, deleteCount, [item1, item2...])
        // start : 배열에서 변경을 시작할 인덱스
        // deleteCount : 배열에서 제거할 요소의 수
        // [item1, item2...] : 옵션 배열에 추가할 요소들
        setTodos(newTodos);
    }

    // 할 일 완료, 미완료 토글 함수
    const handleToggleTodo = (index) => {
        // todos 안에 있는 isDone 바꿔줘야함
        // 얕은 복사 이용해서 바꿔줘야함
        // 얕은 복사 방법 2 번째 : 전개 연산자(spread operator)
        // - 배열이나 객체의 모든 요소를 개별적으로 펼쳐서 새로운 배열이나 객체를 생성할 때 사용
        const newTodos = [...todos];

        // 해당 인덱스의 todo 항목의 isDone 값을 반전
        newTodos[index].isDone = !newTodos[index].isDone;
        // -> true 면 false, false 이면 true 로 바꿔줌

        // 새로운 배열로 상태를 업데이트
        setTodos(newTodos);
    }

    // return () : 화면에 렌더링할 jsx 작성 구문
    return (
        <div>
            <h1>Todo List</h1>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={handleAddTodo}>추가하기</button>

            <ul>
                {/* map 이용 배열 값 return */}
                {
                    todos.map((todo, index) => (
                        // 첫번재 todo는 React 복습하기
                        // 두번째 todo는 일기쓰기
                        // 배열에는 요소 번호가 있음
                        // 첫번째는 0, 두번째는 1 index 로 들어옴
                        // return 구문 작성해줘야 화면에 렌더링 됨
                        // 중괄호로 jsx 구문 열었을 때 return 구문 꼭 필요함
                        // return 쓰기 실으면 => 다음에 () 소괄호 작성하고 jsx 문법 작성
                        // -> 중괄호와 return 생략한 것과 같음
                        // return (
                        //     <li>
                        //         <span>{todo.title}</span>
                        //     </li>
                        // );
                        <li>
                            <span style={{textDecoration : todo.isDone ? 'line-through' : 'none'}}>
                                {/* style 안에 중괄호 두번 */}
                                {todo.title}
                            </span>

                            <button onClick={() => handleToggleTodo(index)}>{todo.isDone ? '미완료' : '완료'}</button>
                            <button onClick={() => handleDeleteTodo(index)}>삭제</button>
                            {/* 클릭할 때 index를 handleDeleteTodo함수에 넘겨줌 */}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;