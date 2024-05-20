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
  const goGawonProfile = () => {
    navigate("/profiles/velopert");
  };
  const goHeroProfile = () => {
    navigate("/profiles/hero");
  };
  const goJoonProfile = () => {
    navigate("/profiles/joon");
  };
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <header className="header">
        자기소개 홈페이지
        <br />
        <button className="button" onClick={goHome}>
          홈
        </button>
        <button className="button" onClick={goBack}>
          뒤로가기
        </button>
        <button className="button" onClick={goArticles}>
          게시글
        </button>
        <button className="button" onClick={goGawonProfile}>
          김가원 프로필
        </button>
        <button className="button" onClick={goHeroProfile}>
          김영웅 프로필
        </button>
        <button className="button" onClick={goJoonProfile}>
          허준 프로필
        </button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
