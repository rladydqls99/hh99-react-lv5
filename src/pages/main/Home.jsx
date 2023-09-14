import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const params = useParams();

  const goRecordTodolist = () => {
    navigate(`/main/${params.id}/recordtodo`);
  };

  const goTodoList = () => {
    navigate(`/main/${params.id}/todolist`);
  };
  return (
    <div>
      <h1>무엇을 할까요?</h1>
      <div onClick={goRecordTodolist}>할일 기록하기</div>
      <div onClick={goTodoList}>TODO LIST</div>
    </div>
  );
}

export default Home;
