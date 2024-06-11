import logo from './logo.svg';
import './App.css';
import TodoList from './todoList/todoList';
import Exam6_1, {Exam6_2} from './exam/Exam6';
import { ThemeProvider } from './contextAPI/ThemeContext';
import ThemeToggle from './contextAPI/ThemeToggle';
import ThemeComponent from './contextAPI/ThemeComponent';
import { useState } from 'react';
// import './default.css';


function App() {

  const [todoList, setTodoList] = useState([

    { title : "React 개념정리", isComplete : false },
    
    { title : "도서관에 책 반납하기", isComplete : true }
    
    ]);
    
    const [inputTodo, setInputTodo] = useState("");
    
    const changeTodo = (e) => {
    
    setInputTodo(e.target.value);

    
    }
    
    const addTodo = () => {
    
    setTodoList([...todoList, { title: inputTodo , isComplete : false }]);
    
    // 비워주기 여기서 해야함
    setInputTodo("");
    }

  return (
    <div className="App">
      <ThemeProvider>
        {/* ThemeContext는 다른 곳에서 쓸 거임 useContext 이용해서 이 값을 사용하는 주체가 되는 자식 컴포넌트들이 ThemeContext 이용할거임 */}
        {/* 자식 컴포넌트 여러 개 나열할 수 있음 그럼 ThemeProvider 함수의 children 으로 들어가고 */}
        {/* 그 children 들이 return 값 안에 children 에 들어감 */}
        {/* 자식 컴포넌트들이 theme, toggleTheme 이용할 수 있음 */}
        <ThemeToggle />
        <ThemeComponent />
      </ThemeProvider>
      {/* <Exam6_1 isLogin={false}/> */}
      {/* <Exam6_2 /> */}
      <TodoList />
    </div>


//     <div class="container">

//     <table border={1}>

//       <thead>

//       <tr>

//       <th>할 일 내용</th>

//       <th>완료 여부</th>

//       </tr>

//       </thead>

//       <tbody>
//       {/* 기존에 있던 값 2개 먼저 보여줘야함 */}
//         {/* {todoList.map((todo,index) => {

//         // <tr>

//         // <td>{todo.title}</td>

//         // <td>{todo.isComplete ? "완료" : "미완료"}</td>

//         // </tr>


//         })} */}

//           {/* tr 태그 안에서 작성 */}
//           {/* {
//             todoList.map((todo, index) => (
//               <tr>
//                 <td>{todo.title}</td>
//                 <td>{todo.isComplete ? '완료' : '미완료'}</td>
//               </tr>
//             ))
//           } */}
// {
// todoList.map((el) => (
// <tr>

// <td>{el.title}</td>

// <td>{el.isComplete ? "완료" : "미완료"}</td>

// </tr>
// ))
// }


//       </tbody>

//     </table>

//     <div className='inputDiv'>

//     {/* inputValue 가 아니라 inputTodo */}
//     <input type='text' value={inputTodo} onChange={changeTodo}></input>

//     <button onClick={addTodo}>할 일 등록</button>

//     </div>

// </div>
  );
}

export default App;
