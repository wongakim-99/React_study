import React from "react";
import { RouterProvider } from "react-router-dom";
import StudyRouter from "./router";

const App = () => {
  return (
    <div>
      <RouterProvider router={StudyRouter} />
    </div>
  );
};

export default App;
