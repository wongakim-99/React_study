// import React, { useState } from "react";
// import InfoFour from "./InfoFour";

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? "숨기기" : "보이기"}
//       </button>
//       <hr />
//       {visible && <InfoFour />}
//     </div>
//   );
// };

// export default App;

// import Average from "./Average";

// const App = () => {
//   return <Average />;
// };

// export default App;

// App.js

import React from "react";
import SmartHome from "./components/SmartHome";

const App = () => {
  return (
    <div style={{ position: "absolute", top: "50%", left: "50%" }}>
      <SmartHome />
    </div>
  );
};

export default App;
