import React from "react";
import { Link } from "react-router-dom";
import welcomeImage from "../../src/images/welcome.png";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <img src={welcomeImage} alt="Welcome" style={{ maxWidth: "40%" }} />
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">가원의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/hero">영웅의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/joon">허준의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
