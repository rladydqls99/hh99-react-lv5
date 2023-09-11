import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <h1>로그인 하기</h1>
      <div>
        <h3>아이디</h3>
        <input type="text" />
        <h3>비밀번호</h3>
        <input type="password" />
      </div>
      <div>
        <button>로그인</button>
        <button
          onClick={() => {
            navigate("/join");
          }}
        >
          회원가입
        </button>
      </div>
    </>
  );
}

export default Login;
