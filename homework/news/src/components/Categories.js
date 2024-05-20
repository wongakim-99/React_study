/**뉴스 카테고리는 6개
 *
 * 1. business
 * 2. entertainment
 * 3. health
 * 4. science
 * 5. sports
 * 6. technology
 */

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const Categories = () => {
  return (
    <div className="CategoriesBlock">
      {categories.map((c) => (
        <div className="Categories" key={c.name}>
          {c.text}
        </div>
      ))}
    </div>
  );
};

export default Categories;
