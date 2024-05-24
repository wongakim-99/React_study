// import React from "react";
// import ColorBox from "./components/ColorBox";
// import { ColorProvider } from "./contexts/color";
// import SelectColors from "./components/SelectColors";

// const App = () => {
//   return (
//     <ColorProvider>
//       <div>
//         <SelectColors />
//         <ColorBox />
//       </div>
//     </ColorProvider>
//   );
// };

// export default App;

import React, { createContext, useContext } from "react";
import "./style.css";
const themeDefault = { border: "10px solid red" };
const themeContext = createContext(themeDefault);

const Sub1 = () => {
  const theme = useContext(themeContext); //자기의 부모중에 가장먼저 등장하는 Provider의 value를 가짐
  //useContext가 리턴한 값을 불러옴 -> 그 blue가 스타일 적용된게
  return (
    <themeContext.Provider value={{ border: "10px solid green" }}>
      <div style={theme}>
        <h1>Sub1</h1>
        <Sub2 />
      </div>
    </themeContext.Provider>
  );
};

const Sub2 = () => {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  );
};

const Sub3 = () => {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
};

const App = () => {
  const theme = useContext(themeContext);
  console.log("theme", theme);

  return (
    <themeContext.Provider value={{ border: "10px solid blue" }}>
      <div className="root" style={theme}>
        <h1>Hello World!</h1>
        <Sub1 />
      </div>
    </themeContext.Provider>
  );
};

export default App;

//Context를 공유하면 전역적으로 상태관리 가능
