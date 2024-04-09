/**Event 컴포넌트 렌더링 */
//import IterationSample from "./IterationSample";
import { RouterProvider } from "react-router-dom";
import studyRouter from "./router";

const App = () => {
  return <RouterProvider router={studyRouter} />;
};

export default App;
