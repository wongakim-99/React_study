import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import "./NewsList.scss";
import axios from "axios";

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async 비동기화 하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7e8becafd4764a7fb0e28b3174f304c5`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  //대기중일때
  if (loading) {
    return <div className="NewsListBlcok">대기 중...</div>;
  }
  //아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }
  /**데이터를 불러와서 뉴스 데이터 배열을 map 함수를 사용하여 컴포넌트 배열로 변환할 때
   * map 함수를 사용하기 전에 꼭 !articles를 조회하여 해당 값이 현재 null이 아닌지 검사해야됨.
   * 아직 데이터가 없을 때 null에는 map함수가 없기 때문에 렌더링 과정에서 오류발생
   */

  return (
    <div className="NewsListBlock">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
