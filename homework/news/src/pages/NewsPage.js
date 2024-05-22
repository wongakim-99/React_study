// NewsPage.js 파일
import { useParams } from "react-router-dom";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

const NewsPage = () => {
  const params = useParams();
  const category = params.category || "all";
  const onSelectCategory = (selectedCategory) => {
    // 카테고리가 선택되었을 때 실행되는 함수
    console.log("Selected category:", selectedCategory);
    // 여기에 선택된 카테고리에 대한 추가적인 로직을 넣을 수 있습니다.
  };

  return (
    <>
      <Categories onSelect={onSelectCategory} />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
