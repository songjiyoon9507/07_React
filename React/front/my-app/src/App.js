import logo from './logo.svg';
import './App.css';
import TodoList from './todoList/todoList';
import Exam6_1, {Exam6_2} from './exam/Exam6';
import { ThemeProvider } from './contextAPI/ThemeContext';
import ThemeToggle from './contextAPI/ThemeToggle';
import ThemeComponent from './contextAPI/ThemeComponent';

function App() {
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
  );
}

export default App;
