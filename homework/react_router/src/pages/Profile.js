import React from "react";
import { useParams } from "react-router-dom";
import velopertImage from "../../src/images/me.jpg"; // velopert 사용자 이미지 import
import heroImage from "../../src/images/hero.jpg";
import joonImage from "../../src/images/joon.jpg"; // joon 사용자 이미지 import

const data = {
  velopert: {
    name: "김가원",
    age: 26,
    description: "데이터 분석가가 목표지만 사이드로 리액트도 공부하는 혼종",
    military: "육군 제9보병사단 29여단 1대대(폐급대대) 출신",
  },
  hero: {
    name: "김영웅",
    age: 26,
    description:
      "해병대 출신 회계학을 공부하는 사람(회계사 진) (tmi) : 겉보기에는 떡대가 커서 미친놈인걸로 첫인상이 예상되지만 실제로도 미친놈이 맞다.",
    military:
      "해병대 6여단 62대대 출신(tmi : 짬찌대 해병대 악습 없에겠다 선언했지만 결국 짬차고 본인이 악습 진행함;;)",
  },
  joon: {
    name: "허준",
    age: 26,
    description:
      "이름 때문에 한의사로 많이 오해받지만, 실제로는 기계공학 학부생, 그러나 대학원이라는 잘못된 선택을 하고 말았고 곧 진학할 예정...",
    military: "육군출신(군사기밀사항)",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  let profileImage; // 프로필 이미지 변수
  // params.username에 따라서 해당 사용자의 이미지를 할당
  if (params.username === "velopert") {
    profileImage = velopertImage;
  } else if (params.username === "hero") {
    profileImage = heroImage;
  } else if (params.username === "joon") {
    profileImage = joonImage;
  }

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <img
            src={profileImage}
            alt={profile.name}
            style={{ width: 200, height: "auto", borderRadius: "50%" }}
          />
          <h2>{profile.name}</h2>
          <h3>나이 : {profile.age}</h3>
          <p>인생 한줄 요약 : {profile.description}</p>
          <p>출신 군대 : {profile.military}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
