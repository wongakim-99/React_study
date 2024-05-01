// import React, { Component } from "react";
// import IterationSampleVol2 from "./IterationSampleVol2";
// import { RouterProvider } from "react-router-dom";
// import studyRouter from "./router";
// import IterationSampleVol1 from "./IterationSampleVol1";

// function App() {
//   return (
//     <>
//       <RouterProvider router={studyRouter} />;
//       <IterationSampleVol1 />
//     </>
//   );
// }

// export default App;

// import React, { Component } from "react";
// import IterationSampleVol4 from "./IterationSampleVol4";

// class App extends Component {
//   render() {
//     return <IterationSampleVol4 />;
//   }
// }

// export default App;

import { RouterProvider } from "react-router-dom";
import React from "react";
import studyRouter from "./router";

function App() {
  return <RouterProvider router={studyRouter} />;
}

// function Home() {
//   return <h1>Welcome to my react study room!</h1>
// }

export default App;
