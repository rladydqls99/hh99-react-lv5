import React from "react";
import { useQuery } from "react-query";
import { getTodos } from "../api/todos";
import { useParams } from "react-router-dom";

function Main() {
  // todos에 저장되어 있는 데이터 가져오기
  const params = useParams();
  const { isError, isLoading, data } = useQuery("users", getTodos);

  return (
    <div>
      {data &&
        data
          .filter((todo) => todo.userId === params.id)
          .map((todo, idx) => <div key={idx}>{todo.todo}</div>)}
    </div>
  );
}

export default Main;
