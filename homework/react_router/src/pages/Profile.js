import React from "react";
import { useParams } from "react-router-dom";
import velopertImage from "../../src/images/me.jpg"; // velopert 사용자 이미지 import
import heroImage from "../../src/images/hero.jpg";
import joonImage from "../../src/images/joon.jpg"; // joon 사용자 이미지 import

const data = {
  velopert: {
    name: "김가원",
    age: 26,
    description: "데이터 분석가가 목표. 사이드로 리액트도 추가로 공부하는 사람",
    school: "상명대(소프트웨어학과 재학)",
    address: "경기도 성남시 분당구 미금",
    nonlan: "학교 쉅 끝나면 자동 귀소본능 발동",
    military:
      "군필 - 육군 제9보병사단 29여단 1대대(폐급대대) 1중대 2소대 유탄수 + K3기관총사수 출신",
  },
  hero: {
    name: "김영웅",
    age: 26,
    description:
      "호주 대학교에서 회계학을 공부하는 사람(회계사 진) (tmi : 관상만 봤을때 미친놈인걸로 첫인상이 예상되지만 실제로도 미친놈이 맞다.)",
    school: "시드니 대학(회계학과 재학)",
    address: "호주 시드니",
    nonlan: "고딩때 농구부에 뇌물주고 들어감",
    military:
      "군필 - 해병대 6여단 62대대 출신(tmi : 짬찌대 해병대 악습 없에겠다 선언했지만 결국 짬차고 본인이 악습 진행함;;)",
  },
  joon: {
    name: "허준",
    age: 26,
    description:
      "이름 때문에 한의대 학생으로 많이 오해받지만, 실제로는 기계공학 학부생, 그러나 대학원이라는 잘못된 선택을 하고 말았고 곧 진학할 예정...",
    school:
      "건국대 (기계공학과 재학(금학기 졸업예정) + 건국대 대학원 진학예정ㅅㄱ)",
    address: "경기도 성남시 분당구 미금",
    nonlan: "고딩때 같은반 호감있던 여자에게 플러팅 갈기다가 결국 베드엔딩...",
    military: "군필 - 육군출신(보급병으로 근무) 몇사단인지는 모름",
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
          <p>학교 : {profile.school}</p>
          <p>주소 : {profile.address}</p>
          <p>논란 : {profile.nonlan}</p>
          <p>출신 군대 : {profile.military}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
