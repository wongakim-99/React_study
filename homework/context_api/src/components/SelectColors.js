import ColorContext from "../contexts/color";
import React, { useContext } from "react";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  const { actions } = useContext(ColorContext);
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
            onClick={() => actions.setColor(color)}
            onContextMenu={(e) => {
              //마우스 우클릭시 메뉴버튼 나오는 것을 방지
              e.preventDefault();
              actions.setSubColor(color);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectColors;
