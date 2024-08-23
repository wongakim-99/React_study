import React, { useState } from "react";
import "./App.css";

const Modal = () => {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <div className="under-bar">
      <h4>Gawon Online Judge</h4>
      <p>
        © 2023 All Rights Reserved. 주식회사 스타트링크 | 서비스 약관 | 개인정보
        보호 | 결제 이용 약관 | 도움말 | 광고 문의 | 업데이트 노트 | 이슈 | TODO
      </p>
      <p>대표자명 : 김가원</p>
      <p>주소 : 성남시 분당구 미금일로 까치마을</p>
      <p>전화번호 : 010-5967-1280</p>
      <p>이메일 : kgw1999zz@naver.com</p>
      <p>인스타그램 : go_.work</p>
    </div>
  );
};

const App = () => {
  const [title, setTitle] = useState([
    "하남자 코트 추천",
    "여자 코트 추천",
    "분당 맛집 추천",
  ]);

  const changeTitle = () => {
    const copyFir = [...title];
    copyFir[0] = "여자코트 추천";
    setTitle(copyFir);
  };

  const sortTitle = () => {
    const copySec = [...title];
    copySec.sort((a, b) => (a.toUpperCase() < b.toUpperCase() ? -1 : 1));
    setTitle(copySec);
  };

  const [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: "20px" }}>리액트 블로그</h4>
      </div>

      <button onClick={changeTitle}>바꾸기</button>
      <button onClick={sortTitle}>가나다순 정렬</button>

      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>
          {like}
        </h4>
        <p>6월 26일 발행</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>6월 26일 발행</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>6월 26일 발행</p>
      </div>
      <Modal />
      <Footer />
    </div>
  );
};

export default App;
