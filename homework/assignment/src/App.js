import React, { useState } from "react";
import "./App.css"; // 스타일 파일을 import
import Login from "./Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //로그인 상태검사
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>로그인 성공!</h1>
      ) : (
        <div>
          <h1>로그인 페이지</h1>
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;
