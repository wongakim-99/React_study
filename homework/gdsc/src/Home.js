import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>처음 보여지는 페이지입니다.</p>
      <li>
        <Link to="/about">소개</Link>
      </li>
      <li>
        <Link to="/Profile/developer1">김가원</Link>
      </li>
      <li>
        <Link to="/Profile/developer2">김승찬</Link>
      </li>
      <li>
        <Link to="/Profile/developer3">존재하지 않는 프로필</Link>
      </li>
      <li>
        <Link to="/articles">게시글</Link>
      </li>
    </div>
  );
};

export default Home;
