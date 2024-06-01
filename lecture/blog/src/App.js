import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Modal from "./Modal";
import UnderBar from "./UnderBar";
import DetailPage from "./DetailPage";

const App = () => {
  const post = "ReactBlog";
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;
  const [summary, setSummary] = useState([]);

  const [like, setLike] = useState([]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [input, setInput] = useState("");

  const updateLike = (index) => {
    const copy = [...like];
    copy[index] += 1;
    setLike(copy);
  };

  const plusClick = () => {
    if (input !== "") {
      setSummary([...summary, input]);
      setLike([...like, 0]);
      setInput("");
    }
  };

  const delClick = (index) => {
    const updatedSummary = summary.filter((_, i) => i !== index);
    const updatedLike = like.filter((_, i) => i !== index);
    setSummary(updatedSummary); // 필터링 된 글 삭제
    setLike(updatedLike); // 마찬가지로 필터링 된 좋아요 삭제
    setModal(false);
  };

  return (
    <Router>
      <div className="App">
        <div className="black-nav">
          <h4 style={{ color: "white", fontSize: "20px" }}>{post}</h4>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {summary.map((item, index) => (
                  <div className="list" key={index}>
                    <h4
                      onClick={() => {
                        setModal(true);
                        setTitle(index);
                      }}
                    >
                      {item}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateLike(index);
                        }}
                      >
                        👍
                      </button>
                      {like[index]}
                    </h4>
                    <p>발행일 : {formattedDate}</p>
                    <button onClick={() => delClick(index)}>삭제</button>
                    <Link to={`/detail/${index}`}>
                      <button>상세내용</button>
                    </Link>
                  </div>
                ))}

                <input
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />

                <button onClick={plusClick}>글 추가</button>

                {modal && (
                  <Modal
                    color={""}
                    summary={summary}
                    setSummary={setSummary}
                    title={title}
                    formattedDate={formattedDate} // 이 부분 추가
                  />
                )}
                <button
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  닫기
                </button>
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={<DetailPage summary={summary} />}
          />
        </Routes>
        <UnderBar />
      </div>
    </Router>
  );
};

export default App;
