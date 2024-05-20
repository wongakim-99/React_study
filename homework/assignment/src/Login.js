// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     loginId: "",
//     password: "",
//   });

//   const [responseData, setResponseData] = useState({
//     memberName: "",
//     memberNickName: "",
//     message: "",
//   });

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://kscoldproject.site/api/login",
//         formData
//       );
//       setResponseData({
//         memberName: response.data.memberName,
//         memberNickName: response.data.memberNickName,
//         message: response.data.message,
//       });
//       setIsLoggedIn(true);
//     } catch (error) {
//       console.error("Error", error);
//       setResponseData({
//         memberName: "",
//         memberNickName: "",
//         message: "로그인 실패, 다시 시도해주세요",
//       });
//     }
//   };

//   return (
//     <div>
//       {!isLoggedIn ? (
//         <form onSubmit={handleSubmit}>
//           <label>
//             로그인 ID
//             <input
//               type="text"
//               name="loginId"
//               value={formData.loginId}
//               onChange={handleChange}
//             />
//           </label>
//           <br />
//           <label>
//             비밀번호
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </label>
//           <br />
//           <button type="submit">로그인</button>
//         </form>
//       ) : (
//         <div>
//           <h2>Response</h2>
//           <p>멤버 이름 : {responseData.memberName}</p>
//           <p>멤버 닉네임 : {responseData.memberNickName}</p>
//           <p>메시지 : {responseData.message}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    loginId: "",
    password: "",
  });

  const [responseData, setResponseData] = useState({
    memberName: "",
    memberNickName: "",
    message: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://kscoldproject.site/api/login",
        formData
      );
      setResponseData({
        memberName: response.data.memberName,
        memberNickName: response.data.memberNickName,
        message: response.data.message,
      });
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error", error);
      setResponseData({
        memberName: "",
        memberNickName: "",
        message: "로그인 실패, 다시 시도해주세요",
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({
      loginId: "",
      password: "",
    });
    setResponseData({
      memberName: "",
      memberNickName: "",
      message: "",
    });
  };

  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <label>
            Login ID
            <input
              type="text"
              name="loginId"
              value={formData.loginId}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <h2>환영합니다! {responseData.memberName}!</h2>
          <p>닉네임 : {responseData.memberNickName}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Login;
