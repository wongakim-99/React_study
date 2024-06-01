import React from "react";

const Modal = (props) => {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.summary[props.title]}</h4>
      <p>날짜 : {props.formattedDate}</p>
      <p>상세내용</p>
      <button>바꾸기</button>
    </div>
  );
};

export default Modal;
