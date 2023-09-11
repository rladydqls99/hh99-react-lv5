import React from "react";
import { useNavigate } from "react-router-dom";

function Join() {
  const navigate = useNavigate();
  return (
    <>
      <h1>회원가입</h1>
      <div>
        <h3>아이디</h3>
        <input type="text" />
        <h3>비밀번호</h3>
        <input type="password" />
      </div>
      <div>
        <button
          onClick={() => {
            alert("회원가입 성공");
            navigate("/");
          }}
        >
          회원가입
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          로그인
        </button>
      </div>
    </>
  );
}

export default Join;
