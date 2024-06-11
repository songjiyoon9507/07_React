import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState([]);

  const [message2, setMessage2] = useState("");
  
  const [message3, setMessage3] = useState("");

  // react 에서 제공하는 hook
  useEffect(() => {

    // 요청 -> 서버로 요청 (yarn start 로 서버 돌리면 3000)
    // react(브라우저)        -> spring(서버)
    // http://localhost:3000 -> http://localhost:80
    // package.json 에서 포트 번호 설정해줘야함 (환경 설정해주는 곳)
    // -> fetch 요청이 서버로 들어감
    fetch("/test1")
    .then(resp => resp.json())
    .then(data => {
      setMessage(data);
    });

  }, []);
  // 빈 배열 안에 상태나 메세지 값 넣어주면 메세지 변할 때마다
  // 함수가 다시 돈다.
  // 안 써주면 처음 실행할 때만 읽어줌

  const handleClick = () => {
    fetch("/test2", {
      method: "post",
      headers: {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        name : "홍길동",
        age : 20
      })
    })
    .then(resp => resp.text())
    .then(data => setMessage2(data));
  }

  // ctrl + c 터미널 끄기

  // axios
  // 브라우저 및 node.js 환경에서
  // 비동기 요청을 쉽게 처리할 수 있게 해주는 JavaScript 라이브러리
  // * 터미널에서 npm / yarn 같은 패키지 매니저를 통해서 설치할 수 있음
  // 설치 방법
  // npm 이용 시
  // $ npm install axios
  // yarn 이용 시
  // $ yarn add axios
  const axiosTest = () => {

    axios.post("/test2", {
      name : "김유저",
      age : 17
    })
    .then(resp => {
      console.log(resp);

      setMessage3(resp.data);
    })
  }

  // 1. post 요청 시 데이터를 자동으로 JSON 데이터 형태로 처리해줌으로,
  //    fetch와 달리 JSON.stringify 를 명시적으로 호출할 필요가 없음
  // 2. 응답을 JSON 으로 자동 파싱해주기 때문에, fetch 처럼 두번째 then 으로 응답을 파싱할 필요가 없음
  // 3. headers와 body를 명시적으로 설정하지 않아도 된다.
  //    headers의 경우는 기본적으로 작성하지 않으면 Content-Type : application/json으로 설정되어 있음
  //    단, header 내용 변경 시 명시적으로 작성해야 함.
  //    ex) headers : {'Authorization' : 'Bearer {token}} 인증 관련 jwt 사용할 때 header 내용

  return (
    <ul>
      {message.map((el, idx) => <li key={idx}>{el}</li>)}
      {/* 브라우저에서 map 을 이용해서 만들 때 구분해줄 수 있는 key 값이 있는데
      안 써주면 error 가 나서 적어줌 */}

      <hr />

      <button onClick={handleClick}>fetch로 서버 통신</button>
      <br></br>
      <h1>{message2}</h1>

      <hr />

      <button onClick={axiosTest}>axios로 서버 통신</button>
      <br></br>
      <h1>{message3}</h1>

    </ul>
  );
  
}

export default App;
