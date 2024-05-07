import React from "react";
import { useParams } from "react-router-dom";

const data = {
  developer1: {
    name: "김가원",
    discription: "4학년",
  },
  developer2: {
    name: "김승찬",
    discription: "3학년",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2> {profile.name}</h2>
          <h2> {profile.discription}</h2>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다</p>
      )}
    </div>
  );
};

export default Profile;
