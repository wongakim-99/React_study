// import React, { useContext } from "react";
// import ColorContext from "../contexts/color";

// const ColorBox = () => {
//   const { state } = useContext(ColorContext); // 리액트에 내장되어 있는 Hooks 중 useContext라는 Hook을 사용하면,
//   //함수 컴포넌트에서 Context를 편하게 사용할 수 있음.
//   return (
//     <>
//       <div
//         style={{
//           width: "64px",
//           height: "64px",
//           background: state.color,
//         }}
//       />
//       <div
//         style={{
//           width: "32px",
//           height: "32px",
//           background: state.subcolor,
//         }}
//       />
//     </>
//   );
// };

// export default ColorBox;

import React, { useContext } from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  //const { state } = useContext(ColorContext); // 리액트에 내장되어 있는 Hooks 중 useContext라는 Hook을 사용하면,
  //함수 컴포넌트에서 Context를 편하게 사용할 수 있음.
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
    </>
  );
};

export default ColorBox;
