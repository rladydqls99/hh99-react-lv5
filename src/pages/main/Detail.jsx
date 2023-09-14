import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getTodos } from "../../api/todos";

function Detail() {
  const location = useLocation();

  const { isError, isLoading, data } = useQuery("todos", getTodos);

  return (
    <div>
      {data &&
        data
          .filter((item) => item.todoId === location.state.id)
          .map((item) => {
            return (
              <div key={item.todoId}>
                <h1>{item.todoId}</h1>
                <h3>{item.title}</h3>
                <p>{item.contents}</p>
              </div>
            );
          })}
    </div>
  );
}

export default Detail;
