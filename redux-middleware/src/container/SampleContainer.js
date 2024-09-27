// 데이터를 불러와서 렌더링해 줄 때는 유효성 검사를 해 주는 것이 중요함.
// 예를 들어 post && 를 사용하면 post 객체가 유효할 때만 그 내부의 post.title 혹은 post.body 값을 보여줌
// users 도 마찬가지로 데이터가 배열 형태로 들어올 것을 기대하고 map 함수를 사용중
// 그러나 유효성 검사를 하지 않으면 null 값에 대해 map함수를 호출하고, 결국 map 함수가 존재하지 않아 오류가 발생

import React from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React;
const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USERS,
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
