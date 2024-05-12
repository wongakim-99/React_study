import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Layout.css"; // 스타일 파일 import

const Layout = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goArticles = () => {
    navigate("/articles");
  };
  return (
    <div className="container">
      <header className="header">
        자기소개 홈페이지
        <br />
        <button className="button" onClick={goBack}>
          뒤로가기
        </button>
        <button className="button" onClick={goArticles}>
          게시글ㄱㄱ
        </button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
