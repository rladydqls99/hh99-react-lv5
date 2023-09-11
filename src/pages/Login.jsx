import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import { getUsers } from "../api/users";
import { getTodos } from "../api/todos";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // react-query를 통해 users 데이터 가져오기
  const { isError, isLoading, data } = useQuery("users", getUsers);

  // id와 pw 상태관리 --------------------------
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const getUserId = (e) => {
    const { value } = e.target;
    setUserId(value);
  };
  const getUserPw = (e) => {
    const { value } = e.target;
    setUserPw(value);
  };

  // 로그인 버튼 클릭시 메인 페이지로 이동
  const loginButtonHandler = (e) => {
    e.preventDefault();
    if (!userId || !userPw) {
      return alert("아이디와 비밀번호를 모두 입력해주세요.");
    }

    // db에 id가 있는지 확인하고 있으면 비밀번호도 확인
    const validationId = data.filter((user) => user.userId === userId);
    const validationPw = data.filter((user) => user.userPw === userPw);

    if (validationId.length !== 1 || validationPw.length !== 1) {
      return alert("아이디와 비밀번호가 틀립니다.");
    }
    alert("로그인이 완료되었습니다.");
    navigate(`/main/${userId}`);
  };

  return (
    <>
      <h1>로그인 하기</h1>
      <form onSubmit={loginButtonHandler}>
        <h3>아이디</h3>
        <input type="text" value={userId} onChange={getUserId} />
        <h3>비밀번호</h3>
        <input type="password" value={userPw} onChange={getUserPw} />
        <div>
          <button type="submit">로그인</button>
          <button
            onClick={() => {
              navigate("/join");
            }}
          >
            회원가입
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
