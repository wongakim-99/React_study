// App.js 파일
import { Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return (
    <Routes>
      {/* 기본 경로에 대한 라우팅 */}
      <Route path="/" element={<NewsPage Category="all" />} />
      {/* 각 카테고리에 대한 라우팅 */}
      <Route path="/business" element={<NewsPage Category="business" />} />
      <Route
        path="/entertainment"
        element={<NewsPage Category="entertainment" />}
      />
      <Route path="/health" element={<NewsPage Category="health" />} />
      <Route path="/science" element={<NewsPage Category="science" />} />
      <Route path="/sports" element={<NewsPage Category="sports" />} />
      <Route path="/technology" element={<NewsPage Category="technology" />} />
    </Routes>
  );
};

export default App;
