import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { getUsers, addUser } from "../api/users";
import { v4 as uuidv4 } from "uuid";

function Join() {
  const navigate = useNavigate();

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

  // react-query를 통해 users 데이터 가져오기
  const { isError, isLoading, data } = useQuery("users", getUsers);

  // queryClient & mutation
  const queryClient = useQueryClient();
  const mutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      console.log("success");
    },
  });

  // db에 회원가입시 입력한 id, pw 넣기 ------------
  const joinButtonHandler = (e) => {
    e.preventDefault();
    // id와 pw가 입력될 때만 정상처리
    if (!userId || !userPw) {
      return alert("아이디와 패스워드를 모두 입력해주세요.");
    }

    // 이미 존재하는 id일 경우 오류
    const validationUserID = data.filter((user) => user.userId === userId);
    if (validationUserID.length > 0) {
      return alert("아이디가 이미 존재합니다.");
    }

    // id가 존재하지 않으면 users에 id와 pw 추가
    const newUser = {
      userId,
      userPw,
      id: uuidv4(),
    };
    mutation.mutate(newUser);

    // 완료 메세지 및 로그인 페이지로 이등
    alert("회원가입이 완료되었습니다.");
    navigate("/");
  };

  return (
    <>
      <h1>회원가입</h1>
      <form onSubmit={joinButtonHandler}>
        <h3>아이디</h3>
        <input type="text" value={userId} onChange={getUserId} />
        <h3>비밀번호</h3>
        <input type="text" value={userPw} onChange={getUserPw} />
        <div>
          <button type="submit">회원가입</button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            로그인
          </button>
        </div>
      </form>
    </>
  );
}

export default Join;
