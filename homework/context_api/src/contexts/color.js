//Context의 value에는 무조건 상태 값만 있어야 하는 것은 아님.
//함수를 전달해 줄 수도 있음

// import { createContext, useState } from "react";

// const ColorContext = createContext({
//   state: { color: "black", subcolor: "red" },
//   actions: {
//     setColor: () => {},
//     setSubcolor: () => {},
//   },
// });

// const ColorProvider = ({ children }) => {
//   const [color, setColor] = useState("black");
//   const [subcolor, setSubcolor] = useState("red");

//   const value = {
//     state: { color, subcolor },
//     actions: { setColor, setSubcolor },
//   };
//   return (
//     <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
//   );
// };

// const { Consumer: ColorConsumer } = ColorContext;

// export { ColorProvider, ColorConsumer };

// export default ColorContext;

import { createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubColor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubColor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export { ColorProvider };
export default ColorContext;
