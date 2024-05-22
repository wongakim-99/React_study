/**뉴스 카테고리는 6개
 *
 * 1. business
 * 2. entertainment
 * 3. health
 * 4. science
 * 5. sports
 * 6. technology
 */

// Categories.js 파일

import React from "react";
import { NavLink } from "react-router-dom"; // NavLink import

import "./Categories.scss"; // SCSS 파일을 import
import classNames from "classnames";

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

const Categories = ({ category, onSelect }) => {
  return (
    <div className="CategoriesBlock">
      {categories.map((c) => (
        <NavLink
          key={c.name}
          to={`/${c.name}`} // NavLink의 링크 설정
          activeClassName="active" // 활성화된 링크에 적용될 클래스
          className={classNames("Category")}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
