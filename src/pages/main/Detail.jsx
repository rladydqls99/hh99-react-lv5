import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getTodos } from "../../api/todos";
import { Link, useNavigate } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();

  const { isError, isLoading, data } = useQuery("todos", getTodos);

  const detailTodo = data?.filter((item) => location.state.id === item.todoId);

  return (
    <div>
      <div>
        <h1>{detailTodo[0].todoId}</h1>
        <h3>{detailTodo[0].title}</h3>
        <p>{detailTodo[0].contents}</p>
      </div>

      <Link to={-1}>이전으로</Link>
      <button
        on
        onClick={() => {
          navigate("modifydetail");
        }}
      >
        수정
      </button>
    </div>
  );
}

export default Detail;
