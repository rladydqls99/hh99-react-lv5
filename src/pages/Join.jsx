import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Join() {
  const navigate = useNavigate();

  // id와 pw 상태관리 --------------------------
  const [userID, setUserID] = useState("");
  const [userPw, setUserPw] = useState("");

  const getUserId = (e) => {
    const { value } = e.target;
    console.log(value);
    setUserID(value);
  };
  const getUserPw = (e) => {
    const { value } = e.target;
    console.log(value);
    setUserPw(value);
  };
  // ----------------------------------------
  return (
    <>
      <h1>회원가입</h1>
      <div>
        <h3>아이디</h3>
        <input type="text" value={userID} onChange={getUserId} />
        <h3>비밀번호</h3>
        <input type="text" value={userPw} onChange={getUserPw} />
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
