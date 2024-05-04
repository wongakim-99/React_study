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

import InfouseReducer from "./InfouseReducer";

const App = () => {
  return <InfouseReducer />;
};

export default App;
