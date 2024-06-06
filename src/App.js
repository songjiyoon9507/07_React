import logo from './logo.svg';
import './App.css';
import Exam1 from './exam/Exam1';
import Exam2 from './exam/Exam2';
import Exam3 from './exam/Exam3';
import Exam4 from './exam/Exam4';
import Exam5 from './exam/Exam5';
import Exam6_1, {Exam6_2, Exam6_3} from './exam/Exam6';
import { ThemeProvider } from './contextAPI/ThemeContext';
import ThemeToggle from './contextAPI/ThemeToggle';
import ThemeComponent from './contextAPI/ThemeComponent';

// 터미널 ctrl + shift + \` (백틱)으로 열고
// 터미널에서 yarn start 서버 켜기
// 터미널에서 ctrl + c 서버 끄기

function App() {
  return (
    <div className='App'>
      {/* 여러가지 컴포넌트 불러다 쓸 것임. ctrl + / 눌러서 자동완성 주석처리 */}
      {/* <Exam1 /> */}
      {/* <Exam2 /> */}
      {/* <Exam3 /> */}
      {/* <Exam4 /> */}
      {/* <Exam5 /> */}
      {/* 파일명을 작성하는 게 아닌 컴포넌트명 작성해줘야함 */}
      {/* <Exam6_1 isLogin={true}/> */}
      {/* App() 이 Exam6_1 컴포넌트의 부모 */}
      {/* 부모가 Exam6_1 한테 props 속성을 줄 거임 isLogin이라는 이름으로 true boolean 값 전달 */}
      {/* -> 부모가 Exam6_1 을 부를 때 isLogin이라는 이름의 props 를 줌 */}
      {/* Exam6_1 컴포넌트는 부모가 넘겨준 props 를 받을 준비를 해야함 */}

      {/* <Exam6_2 /> */}
      {/* <Exam6_3 label="클릭해보세요~" /> */}
      {/* 자동 import 하면 중괄호 안에 import 돼서 들어감 */}
      {/* 자식한테 props 줌 */}

      {/* div 에 className='App' 작성하면 가운데 정렬됨 */}

      <ThemeProvider>
        {/* ThemeContext는 다른 곳에서 쓸 거임 useContext 이용해서 이 값을 사용하는 주체가 되는 자식 컴포넌트들이 ThemeContext 이용할거임 */}
        {/* 자식 컴포넌트 여러 개 나열할 수 있음 그럼 ThemeProvider 함수의 children 으로 들어가고 */}
        {/* 그 children 들이 return 값 안에 children 에 들어감 */}
        {/* 자식 컴포넌트들이 theme, toggleTheme 이용할 수 있음 */}
        <ThemeToggle />
        <ThemeComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
