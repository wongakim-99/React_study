import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = ({ summary }) => {
  const { id } = useParams();
  const item = summary[id];

  return (
    <div>
      <h2>상세내용 페이지</h2>
      {item ? (
        <>
          <h3>{item}</h3>
          <p>여기에 상세내용을 추가하세요...</p>
        </>
      ) : (
        <p>존재하지 않는 글입니다.</p>
      )}
    </div>
  );
};

export default DetailPage;
